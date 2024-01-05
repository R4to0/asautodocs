﻿NDSummary.OnToolTipsLoaded("File:Classes/MatchResults.as",{360:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype360\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">MatchResults@ MatchResults()</div></div><div class=\"TTSummary\">Constructor</div></div>",361:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype361\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">MatchResults@ MatchResults(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MatchResults@&nbsp;</td><td class=\"PName last\">pOther</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Copy constructor</div></div>",362:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype362\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsEmpty() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this match results object is empty or not</div></div>",363:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype363\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of matches</div></div>",364:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype364\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetMaxSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the maximum size</div></div>",365:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype365\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">SubMatch opIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">uiIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns the sub match object at the given index</div></div>",366:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype366\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">SubMatch GetPrefix() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the prefix submatch</div></div>",367:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype367\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">SubMatch GetSuffix() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the suffix submatch</div></div>",368:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype368\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> GetLength(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName\">uiIndex</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the length of the given submatch</div></div>",369:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype369\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> GetPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName\">uiIndex</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the position of the given submatch</div></div>",370:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype370\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> GetString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName\">uiIndex</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the given submatch as a string</div></div>",371:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype371\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> Format(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName\">szFormat,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">MatchFlagType&nbsp;</td><td class=\"PName\">flags</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\">Regex::match_default</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the length of the given submatch</div></div>",372:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype372\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Swap(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MatchResults@&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Swaps these match results with the given results.</div></div>"});