﻿NDSummary.OnToolTipsLoaded("File:Classes/CEngineFuncs.as",{2215:"<div class=\"NDToolTip TClass LAngelscript\"><div class=\"TTSummary\">Global namespace.</div></div>",2218:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2218\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> ModelIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szModelName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the model index of a model.</div></div>",2219:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2219\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> ModelFrames(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iModelIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the number of frames in a model.</div></div>",2220:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2220\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ChangeLevel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szLevelName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Changes the current level to the one specified.</div></div>",2221:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2221\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> VecToYaw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vec</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Vector to yaw</div></div>",2222:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2222\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> VecToAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vec,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Vector to angles</div></div>",2223:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2223\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> MoveToOrigin(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecGoal,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flDist,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iMoveType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Move entity to origin.</div></div>",2224:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2224\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ChangeYaw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Change yaw. This updates entvars_t::angles[ 1 ] to approach entvars_t::ideal_yaw, at entvars_t::yaw_speed degrees speed.</div></div>",2225:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2225\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ChangePitch(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Change pitch. This updates entvars_t::angles[ 0 ] to approach entvars_t::idealpitch, at entvars_t::pitch_speed degrees speed.</div></div>",2226:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2226\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> GetEntityIllum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get entity illumination. This is a weighted value between 0 and 255, inclusive.</div></div>",2227:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2227\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">edict_t@ FindClientInPVS(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pStartEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Find client in Potentially Visible Set.</div></div>",2228:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2228\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">edict_t@ EntitiesInPVS(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pStartEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Find entities in Potentially Visible Set. Edict::vars::chain is used for this list, and is temporary.</div></div>",2229:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2229\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> MakeVectors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vec</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Make vectors. The results are stored in g_Engine::v_forward, v_right, and v_up.</div></div>",2230:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2230\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AngleVectors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecIn,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecForward,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecRight,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecUp</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Angle vectors</div></div>",2231:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2231\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> MakeStatic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Make entity static. This moves the entity to the client.Its current visual state is copied over, and the entity is removed on the server side.Only valid while the level is loading.</div></div>",2232:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2232\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> EntIsOnFloor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns whether entity is on the floor.</div></div>",2233:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2233\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> DropToFloor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Drop entity to floor.</div></div>",2234:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2234\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> WalkMove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flYaw,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flDist,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iMove</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Make entity walk.</div></div>",2235:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2235\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetAimVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEntity,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flSpeed,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecReturn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get aim vector for entity.</div></div>",2236:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2236\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ServerCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szCommand</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Issues a command to the server. Plugins only.</div></div>",2237:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2237\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> ServerExecute()</div></div><div class=\"TTSummary\">Executes all pending server commands. Plugins only.</div></div>",2238:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2238\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ParticleEffect(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecOrigin,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecDir,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Emit a particle effect.</div></div>",2239:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2239\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> LightStyle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iStyle,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szVal</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set a light style.</div></div>",2240:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2240\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> DecalIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get decal index.</div></div>",2241:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2241\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">CONTENTS PointContents(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecPoint</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if point is in contents.</div></div>",2242:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2242\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> CVarGetFloat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szCvar</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get cvar float value.</div></div>",2243:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2243\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> CVarGetString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szCvar</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get cvar string value.</div></div>",2244:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2244\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> CVarSetFloat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szCvar,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set cvar float value.</div></div>",2245:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2245\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> CVarSetString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szCvar,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set cvar string value.</div></div>",2246:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2246\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">entvars_t@ GetVarsOfEnt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets entity variables of entity.</div></div>",2247:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2247\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> IndexOfEdict(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get index of edict.</div></div>",2248:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2248\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">edict_t@ PEntityOfEntIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get entity by entity index.</div></div>",2249:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2249\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">edict_t@ FindEntityByVars(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">entvars_t@&nbsp;</td><td class=\"PName last\">pVars</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Find entity by variables.</div></div>",2250:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2250\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetBonePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iBone,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecOrigin,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecAngles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get bone position.</div></div>",2251:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2251\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ClientPrintf(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">CBasePlayer@&nbsp;</td><td class=\"PName last\">pPlayer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">PRINT_TYPE&nbsp;</td><td class=\"PName last\">printType,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szMessage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Client print</div></div>",2252:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2252\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ServerPrint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szMessage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Server print</div></div>",2253:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2253\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">string</span> Cmd_Args()</div></div><div class=\"TTSummary\">Get command arguments.</div></div>",2254:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2254\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> Cmd_Argv(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get command argument by index.</div></div>",2255:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2255\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> Cmd_Argc()</div></div><div class=\"TTSummary\">Get number of command arguments.</div></div>",2256:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2256\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetAttachment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iAttachment,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecOrigin,</td></tr><tr><td class=\"PModifierQualifier first\">Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">vecAngles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get attachment position.</div></div>",2257:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2257\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetView(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pViewEntity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set view.</div></div>",2258:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2258\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> Time()</div></div><div class=\"TTSummary\">Get current time.</div></div>",2259:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2259\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> CrosshairAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flPitch,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flYaw</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the angles of the given player\'s crosshairs to the given settings. Set both to 0 to disable. May not have any effect in SC.</div></div>",2260:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2260\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">string</span> GetGameDir()</div></div><div class=\"TTSummary\">Get game directory.</div></div>",2261:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2261\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RunPlayerMove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecViewAngles,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flFowardMove,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flSideMove,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">flUpMove,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">iButtons,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">iImpulse,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">iMsec</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Run player move.</div></div>",2262:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2262\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> NumberOfEntities()</div></div><div class=\"TTSummary\">Get number of entities.</div></div>",2263:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2263\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">KeyValueBuffer@ GetInfoKeyBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get info key buffer.</div></div>",2264:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2264\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">KeyValueBuffer@ GetPhysicsKeyBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get physics key buffer.</div></div>",2265:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2265\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsMapValid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szMapName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns whether the given map is valid.</div></div>",2266:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2266\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> StaticDecal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">vecOrigin,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iDecalIndex,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iEntityIndex,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iModelIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Project a static decal.</div></div>",2267:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2267\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> GetPlayerUserId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get player user ID. This is a unique id generated when a player connects. It remains valid as long as the player stays connected to the server.</div></div>",2268:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2268\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsDedicatedServer() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this is a dedicated server.</div></div>",2269:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2269\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> Cvar@ CVarGetPointer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szCvar</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets a pointer to a cvar.</div></div>",2270:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2270\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetPlayerStats(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">int</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">iPing,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">int</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">iPacketLoss</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get player stats.</div></div>",2271:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2271\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Voice_GetClientListening(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iReceiver,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iSender</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2272:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2272\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Voice_SetClientListening(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iReceiver,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iSender,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">fListen</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2273:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype2273\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> GetPlayerAuthId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">edict_t@&nbsp;</td><td class=\"PName last\">pEdict</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the player\'s Auth ID. (WON/Steam ID)</div></div>"});