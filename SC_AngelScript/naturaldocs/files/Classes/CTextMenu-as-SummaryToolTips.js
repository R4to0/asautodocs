﻿NDSummary.OnToolTipsLoaded("File:Classes/CTextMenu.as",{863:"<div class=\"NDToolTip TClass LAngelscript\"><div class=\"TTSummary\">Global namespace.</div></div>",866:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype866\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">CTextMenu@ CTextMenu(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TextMenuPlayerSlotCallback@&nbsp;</td><td class=\"PName last\">inputCB</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructor. You must pass a player slot callback and handle the input yourself.</div></div>",867:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype867\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">TextMenuId_t get_Id() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets this text menu\'s id. If CTextMenus::INVALID_TEXT_MENU_ID, this is an unregistered menu.</div></div>",868:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype868\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsRegistered() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this menu is registered or not.</div></div>",869:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype869\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> Register()</div></div><div class=\"TTSummary\">Registers this text menu.</div></div>",870:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype870\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Unregister()</div></div><div class=\"TTSummary\">Unregisters this text menu.</div></div>",871:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype871\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Open(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">iDisplayTime,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName\">page,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">array&lt;edict_t@&gt;@&nbsp;</td><td class=\"PName\">pPlayers</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Opens the menu and keeps it open for the given amount of time.</div></div>",872:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype872\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Open(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iDisplayTime,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">page,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">CBasePlayer@&nbsp;</td><td class=\"PName last\">pPlayer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Opens the menu and keeps it open for the given amount of time.</div></div>",873:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype873\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetItemCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the number of items in this menu.</div></div>",874:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype874\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">uint</span> GetPageCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the number of pages in this menu.</div></div>",875:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype875\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> CTextMenuItem@ GetItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">uiIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the item at the given index.</div></div>",876:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype876\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const string</span>&amp; GetTitle() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the title.</div></div>",877:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype877\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetTitle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szTitle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the title.</div></div>",878:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype878\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AddItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName\">szName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">any@&nbsp;</td><td class=\"PName\">pUserData</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds an item to the menu.</div></div>"});