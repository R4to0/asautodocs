﻿NDSummary.OnToolTipsLoaded("AngelscriptClass:[Global_Namespace].CTextMenu",{847:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype847\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">CTextMenu@ CTextMenu(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TextMenuPlayerSlotCallback@&nbsp;</td><td class=\"PName last\">inputCB</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructor. You must pass a player slot callback and handle the input yourself.</div></div>",848:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype848\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">TextMenuId_t get_Id() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets this text menu\'s id. If CTextMenus::INVALID_TEXT_MENU_ID, this is an unregistered menu.</div></div>",849:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype849\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsRegistered() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this menu is registered or not.</div></div>",850:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype850\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> Register()</div></div><div class=\"TTSummary\">Registers this text menu.</div></div>",851:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype851\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Unregister()</div></div><div class=\"TTSummary\">Unregisters this text menu.</div></div>",852:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype852\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Open(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">iDisplayTime,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName\">page,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">array&lt;edict_t@&gt;@&nbsp;</td><td class=\"PName\">pPlayers</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Opens the menu and keeps it open for the given amount of time.</div></div>",853:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype853\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Open(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iDisplayTime,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">page,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">CBasePlayer@&nbsp;</td><td class=\"PName last\">pPlayer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Opens the menu and keeps it open for the given amount of time.</div></div>",854:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype854\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetItemCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the number of items in this menu.</div></div>",855:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype855\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">uint</span> GetPageCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the number of pages in this menu.</div></div>",856:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype856\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> CTextMenuItem@ GetItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">uiIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the item at the given index.</div></div>",857:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype857\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const string</span>&amp; GetTitle() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the title.</div></div>",858:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype858\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetTitle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szTitle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the title.</div></div>",859:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype859\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AddItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName\">szName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">any@&nbsp;</td><td class=\"PName\">pUserData</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds an item to the menu.</div></div>"});