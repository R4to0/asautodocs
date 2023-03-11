﻿NDSummary.OnToolTipsLoaded("AngelscriptClass:[Global_Namespace].CWeaponFuncs",{581:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype581\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> ClearMultiDamage()</div></div><div class=\"TTSummary\">Clears the multi damage data.</div></div>",582:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype582\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ApplyMultiDamage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">entvars_t@&nbsp;</td><td class=\"PName last\">pevInflictor,</td></tr><tr><td class=\"PType first\">entvars_t@&nbsp;</td><td class=\"PName last\">pevAttacker</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Applies multi damage.</div></div>",583:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype583\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AddMultiDamage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">entvars_t@&nbsp;</td><td class=\"PName last\">pevInflictor,</td></tr><tr><td class=\"PType first\">CBaseEntity@&nbsp;</td><td class=\"PName last\">pEntity,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flDamage,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">bitsDamageType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add multi damage.</div></div>",584:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype584\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> WeaponTimeBase()</div></div><div class=\"TTSummary\">Gets the weapon time base.</div></div>",585:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype585\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DecalGunshot(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">TraceResult&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">trace,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iBulletType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a gunshot decal at the trace hit point.</div></div>",586:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype586\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SpawnBlood(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecSpot,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">bloodColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flDamage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Spawns blood at the given location.</div></div>",587:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype587\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> DamageDecal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CBaseEntity@&nbsp;</td><td class=\"PName last\">pEntity,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">bitsDamageType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a damage decal on the given entity.</div></div>",588:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype588\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RadiusDamage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecSrc,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">entvars_t@&nbsp;</td><td class=\"PName last\">pevInflictor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">entvars_t@&nbsp;</td><td class=\"PName last\">pevAttacker,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flDamage,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flRadius,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iClassIgnore,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">bitsDamageType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Deals radius damage.</div></div>"});