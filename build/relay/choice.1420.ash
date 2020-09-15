// The following line is necessary for Ezandora's choice override script to pick this up:
// Choice	override

import "relay/choice.ash";
import "relay/shorts-ui/shorts-ui.ash"

void main(string page_text_encoded)
{
    buffer page_text;
    page_text.append(page_text_encoded.choiceOverrideDecodePageText());
    handle_shorts_ui(page_text);
}