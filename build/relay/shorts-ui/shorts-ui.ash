void handle_shorts_ui(buffer page_text) {
    buffer index_html = file_to_buffer("relay/shorts-ui/index.html");

    matcher m_head = create_matcher("<head>(.*)</head>", index_html);
    m_head.find();
    string head_snippet = m_head.group(1);

    matcher m_body = create_matcher("<body>(.*)</body>", index_html);
    m_body.find();
    string body_snippet = m_body.group(1);

    // Separate out the script block so it doesn't block rendering of the whole page.
    matcher m_scripts = create_matcher("<script.*</script>", body_snippet);
    m_scripts.find();
    string script_snippet = m_scripts.group();
    body_snippet = m_scripts.replace_first("");

    page_text.replace_string("</head>", `{head_snippet}</head>`);
    page_text.replace_string("</body>", `{script_snippet}</body>`);
    matcher m = create_matcher("<small>\\(or pick a pocket below\\)</small>", page_text);
    m.find();
    page_text.insert(m.end(), body_snippet);
    write(page_text);
}