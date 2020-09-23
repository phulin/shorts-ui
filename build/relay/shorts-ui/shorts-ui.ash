string[int] properties = { "cargoPocketsEmptied", "_cargoPocketEmptied" };

void handle_shorts_ui(buffer page_text) {
    string body_snippet;
    string script_snippet;

    if (get_property("shorts_devMode") == "true") {
        script_snippet = '<script defer src="/shorts-ui/bundle.js"></script><script nomodule src="/shorts-ui/polyfills.js"></script>';
        body_snippet = '<div id="preact_root"></div>';
    } else {
        buffer index_html = file_to_buffer("relay/shorts-ui/index.html");

        matcher m_head = create_matcher("<head>(.*)</head>", index_html);
        m_head.find();
        string head_snippet = m_head.group(1);
        page_text.replace_string("</head>", `{head_snippet}</head>`);

        matcher m_body = create_matcher("<body>(.*)</body>", index_html);
        m_body.find();
        body_snippet = m_body.group(1);

        // Separate out the script block so it doesn't block rendering of the whole page.
        matcher m_scripts = create_matcher("<script.*</script>", body_snippet);
        m_scripts.find();
        script_snippet = m_scripts.group();
        body_snippet = m_scripts.replace_first("");
    }

    string[string] property_values;
    foreach i, prop in properties property_values[prop] = get_property(prop);
    script_snippet += `<script type="text/javascript">var globalAshProperties = {property_values.to_json()};</script>`;

    matcher m_pockets = create_matcher("You've already opened ([0-9]+ of them)", page_text);
    if (m_pockets.find()) {
        string pockets_string = get_property("cargoPocketsEmptied").replace_string(",", ", ");
        if (pockets_string.length() > 0) {
            string opened = `{pockets_string.contains_text(",") ? "pockets" : "pocket"} {pockets_string}`;
            page_text.replace(m_pockets.start(1), m_pockets.end(1), opened);
        }
    }
    
    page_text.replace_string("</body>", `{script_snippet}</body>`);
    matcher m = create_matcher("<small>\\(or pick a pocket below\\)</small>", page_text);
    m.find();
    page_text.insert(m.end(), body_snippet);

    if (get_property("_cargoPocketEmptied") == "true") {
        // Grey out buttons.
        matcher m_which = create_matcher("Reach into pocket.*\\(or pick a pocket below\\)</small>", page_text);
        m_which.find();
        page_text.replace(m_which.start(), m_which.end(), "You've already opened a pocket today.");
    }

    write(page_text);
}