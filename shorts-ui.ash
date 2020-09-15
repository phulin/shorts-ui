void handle_shorts_ui(buffer page_text) {
    buffer index_html = file_to_buffer("relay/shorts-ui/index.html");

    matcher m_head = create_matcher("<head>(.*)</head>", index_html);
    m_head.find();
    string head_snippet = m_head.group(1);

    matcher m_body = create_matcher("<body>(.*)</body>", index_html);
    m_body.find();
    string body_snippet = m_body.group(1);

    page_text.replace_string("</head>", `{head_snippet}</head>`);
    page_text.replace_string("</body>", `{body_snippet}</body>`);
    write(page_text);
}