﻿NDSummary.OnToolTipsLoaded("AngelscriptClass:[Global_Namespace].DateTime",{567:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype567\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> DateTime()</div></div><div class=\"TTSummary\">Default constructor.</div></div>",568:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype568\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DateTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">uiMilliseconds,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iSeconds,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iMinutes,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iHour,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iDayOfMonth,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iMonth,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iYear</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Init constructor.</div></div>",569:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype569\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DateTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">time_t&nbsp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Unix timestamp constructor.</div></div>",570:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype570\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DateTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> DateTime&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">ref</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Copy constructor.</div></div>",571:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype571\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DateTime&amp; opAssign(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> DateTime&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">ref</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Assignment operator.</div></div>",572:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype572\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DateTime&amp; opAssign(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">time_t&nbsp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Assignment operator.</div></div>",573:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype573\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">time_t ToUnixTimestamp() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get time as a unix timestamp.</div></div>",574:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype574\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetUnixTimestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">time_t&nbsp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets time as a unix timestamp.</div></div>",575:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype575\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">uint</span> GetMilliseconds() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get milliseconds.</div></div>",576:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype576\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetSeconds() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get seconds after the minute including leap second (0-60).</div></div>",577:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype577\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetMinutes() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get minutes after the hour (0-59).</div></div>",578:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype578\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetHour() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get hours since midnight (0-23).</div></div>",579:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype579\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetDayOfMonth() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get day of the month (1-31).</div></div>",580:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype580\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetMonth() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get month of the year (1-12).</div></div>",581:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype581\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetYear() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get year.</div></div>",582:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype582\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetIsDst() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Get daylight savings active.</div></div>",583:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype583\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetMilliseconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">uiMilliseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set milliseconds.</div></div>",584:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype584\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iSeconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set seconds after the minute including leap second (0-60).</div></div>",585:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype585\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetMinutes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iMinutes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set minutes after the hour (0-59).</div></div>",586:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype586\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetHour(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iHours</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set hours since midnight (0-23).</div></div>",587:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype587\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetDayOfMonth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iDay</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set day of the month (1-31).</div></div>",588:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype588\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetMonth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iMonth</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set month of the year (1-12).</div></div>",589:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype589\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetYear(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iYear</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set year.</div></div>",590:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype590\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetIsDst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iIsDst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set daylight savings active.</div></div>",591:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype591\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> Format(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">szResult,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szFormat</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Formats this datetime as a string.</div></div>",592:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype592\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ToString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">szResult</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns a string representation of this datetime.</div></div>",593:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype593\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> opEquals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> DateTime&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns whether these two DateTimes represent the same time.</div></div>",594:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype594\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> opCmp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> DateTime&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Comparison operator.</div></div>",595:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype595\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeDifference opSub(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> DateTime&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Subtracts the given DateTime from this one, resulting in a TimeDifference object.</div></div>",596:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype596\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DateTime&amp; opAddAssign(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> TimeDifference&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">diffTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds the given TimeDifference to this one.</div></div>",597:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype597\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DateTime opAdd(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> TimeDifference&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">diffTime</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Adds this DateTime and the given TimeDifferene together, returning a copy containing the new time.</div></div>"});