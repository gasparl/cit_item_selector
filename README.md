**Concealed Information Test item selector**

This small application serves to select appropriate irrelevant items for a Concealed Information Test, based on given probes.

Irrelevant items will have the closest possible length to the probe (depending on the list of available items), and none of them will start with the same letter (except for months in case of dates, since there are not sufficient months with different starting letters). If a probe has a space in it (e.g. "United Kingdom" as country of origin), the irrelevant items will also all have spaces in them (e.g. "New Zealand", "Czech Republic", etc.).

A list of eight such potential irrelevant items will be provided on a list in each category, and in each category, up to two items may be chosen to be omitted due to incidental personal relevance. The final items will be randomly chosen from among the remaining items.

**Usage:**

 - Open "1_item_selection.html" in Google Chrome (e.g. drag into a new Tab)
 - Fill out requested information
 - At the arrival to the last page, the output will already be automatically on the Clipboard, and can be pasted into any appropriate editor
 - Alternatively (or if the Clipboard information is lost), pressing "E" or "I" on the keyboard will show the output on the page itself; or otherwise, pressing F12 will also show the output in Chrome's console
 
The ouput is seven items for each category, including one probe as the first item, and then six random irrelevants.
For example (For probes Hungary, Jan 01, and cat):
countries = ['Hungary', 'Morocco', 'Belgium', 'Grenada', 'Algeria', 'Liberia', 'Denmark']
dates = ['Jan 01', 'Mar 29', 'Okt 18', 'Sep 29', 'Aug 06', 'Dec 12', 'Apr 24']
animals = ['Cat', 'Rat', 'Ant', 'Owl', 'Gnu', 'Yak', 'Fly']

The output format and texts may be modified at the end of the "item_base.js" file (lines 273-279).

The entire item categories themselves can be easily modified be replacing the lists of countries or animals with other items again in the "item_base.js" file (first lines), and correspondingly modifying the instruction texts in "1_item_selection.html" (using any text editor). Note however, that there should be sufficient items in these lists for the selections mentioned above (at least 8 different starting letters; both with or without spaces if both formats are possible).

If any help is needed (e.g. further customizations), you are welcome to contact lkcsgaspar@gmail.com

**Ratings**

Personal relevance may be assessed in a short questionnaire using the "2_item_ratings.html" file in a similar way (open in Chrome, get output from Clipboard or in Chrome console). The output will simply be the ratings in the order displayed on the page, separated by tabs, with values from 1 to 6 where 1 is "entirely unimportant" and 6 is "very important". 

This can of course be modified as well, opening the "2_item_ratings.html" file in a text editor and simply overwriting the text contents.

**Reference**

The original German version (see CIT_item_selector_de.zip) was used in:

Lukács, G., Grządziel, A., Kempkes, M., & Ansorge, U. (in press). Item roles explored in a modified P300-based CTP Concealed Information Test. _Applied Psychophysiology and Biofeedback_.
