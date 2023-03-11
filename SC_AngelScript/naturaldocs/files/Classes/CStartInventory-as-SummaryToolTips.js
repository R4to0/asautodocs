﻿NDSummary.OnToolTipsLoaded("File:Classes/CStartInventory.as",{858:"<div class=\"NDToolTip TClass LAngelscript\"><div class=\"TTSummary\">Global namespace.</div></div>",861:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype861\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsAvailable() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether inventory modification is available.</div></div>",862:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype862\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Exists(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szEntry</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns whether the given entry is present in the inventory.</div></div>",863:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype863\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szItem,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">uiAmount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set an item in the inventory.</div></div>",864:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype864\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szEntry</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set an entry to the inventory.</div></div>",865:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype865\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName\">szEntry,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName\">uiAmount,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">fAdd</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add or subtract from an existing value.</div></div>",866:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype866\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szEntry</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes an entry from the inventory.</div></div>",867:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype867\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Restock(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szItem,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">uiAmount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Restocks the inventory with up to uiAmount of the given item.</div></div>",868:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype868\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Limit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szItem,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">uiAmount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Limits the inventory content of the given item to at most uiAmount.</div></div>",869:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype869\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint</span> GetAmount(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szEntry</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the amount of a given entry.</div></div>"});