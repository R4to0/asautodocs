﻿NDSummary.OnToolTipsLoaded("File:Classes/CSoundEnt.as",{879:"<div class=\"NDToolTip TClass LAngelscript\"><div class=\"TTSummary\">Global namespace.</div></div>",882:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype882\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> InsertSound(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iType,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecOrigin,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iVolume,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flDuration,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">CBaseEntity@&nbsp;</td><td class=\"PName last\">pOwner</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Inserts a sound. iType is one of the bits_SOUND enum.</div></div>",883:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype883\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> ActiveList()</div></div><div class=\"TTSummary\">Returns the head of the active list.</div></div>",884:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype884\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> FreeList()</div></div><div class=\"TTSummary\">Returns the head of the free list.</div></div>",885:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype885\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">CSound@ SoundPointerForIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Return a pointer for this index in the sound list.</div></div>",886:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype886\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> ClientSoundIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pClient</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the index for the given client.</div></div>",887:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype887\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsEmpty()</div></div><div class=\"TTSummary\">Returns whether the sound list is empty.</div></div>",888:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype888\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> ISoundsInList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iListType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the number of sounds in the given list. Must be either SOUNDLISTTYPE_FREE or SOUNDLISTTYPE_ACTIVE.</div></div>",890:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype890\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const int</span> m_cLastActiveSounds</div></div><div class=\"TTSummary\">keeps track of the number of active sounds at the last update. (for diagnostic work)</div></div>"});