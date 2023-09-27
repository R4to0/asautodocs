﻿NDSummary.OnToolTipsLoaded("AngelscriptClass:[Global_Namespace].entvars_t",{619:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype619\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> ClassNameIs(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szClassName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns whether the given class name is this entity\'s class name</div></div>",620:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype620\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int8</span> get_controller(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">uint</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get entity controller by index (0..3). Used by entities with studio models to get bone controller settings.</div></div>",621:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype621\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> set_controller(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">uint,</td></tr><tr><td class=\"PName first last\">int8</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set entity controller by index (0..3, 0..255) Used by entities with studio models to set bone controller settings.</div></div>",622:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype622\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int8</span> get_blending(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">uint</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get entity blending by index (0..1). Used by entities with models to get x or y axis blending.</div></div>",623:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype623\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> set_blending(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">uint,</td></tr><tr><td class=\"PName first last\">int8</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set entity blending by index (0..1, 0..255). Used by entities with models to set x or y axis blending.</div></div>",624:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype624\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SpawnFlagBitSet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iFlags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns whether the given flag(s) are set on the entvars spawnflags variable</div></div>",625:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype625\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> FlagBitSet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">iFlags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns whether the given flag(s) are set on the entvars flags variable</div></div>",626:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype626\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ get_pContainingEntity() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Entity containing entity. pContainingEntity.vars equals this entvars instance.</div></div>",628:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype628\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> string_t classname</div></div><div class=\"TTSummary\">The entity class name</div></div>",629:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype629\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t globalname</div></div><div class=\"TTSummary\">The entity global name</div></div>",630:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype630\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector origin</div></div><div class=\"TTSummary\">Entity origin. Must be set using g_EntityFuncs.SetOrigin.</div></div>",631:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype631\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector oldorigin</div></div><div class=\"TTSummary\">Old entity origin. Used by some entities to store off their original origin before moving to a different location.</div></div>",632:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype632\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector velocity</div></div><div class=\"TTSummary\">Entity velocity</div></div>",633:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype633\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector basevelocity</div></div><div class=\"TTSummary\">Entity base velocity. Used when standing on another entity that applies velocity to entities standing on it, for instance conveyors.</div></div>",634:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype634\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector movedir</div></div><div class=\"TTSummary\">Entity move direction. Used by some entities for movement directions, but some entities use it for other purposes.</div></div>",635:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype635\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector angles</div></div><div class=\"TTSummary\">Entity angles, in degrees.</div></div>",636:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype636\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector avelocity</div></div><div class=\"TTSummary\">Entity angular velocity, in degrees/sec. Applied to the entity\'s angles.</div></div>",637:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype637\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector punchangle</div></div><div class=\"TTSummary\">Player punch angle. These angles are applied to players when they are \'punched\'.These angles are automatically interpolated back to the null vector over time.</div></div>",638:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype638\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector v_angle</div></div><div class=\"TTSummary\">Player view angle. These are the angles used for the player\'s view, and differ from the regular angles variable.</div></div>",639:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype639\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector endpos</div></div><div class=\"TTSummary\">Entity end position. Reserved for future use.</div></div>",640:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype640\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector startpos</div></div><div class=\"TTSummary\">Entity start position. Reserved for future use.</div></div>",641:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype641\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> impacttime</div></div><div class=\"TTSummary\">Entity impact time. Reserved for future use.</div></div>",642:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype642\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> starttime</div></div><div class=\"TTSummary\">Entity start time. Reserved for future use.</div></div>",643:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype643\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> fixangle</div></div><div class=\"TTSummary\">Entity fix angle. Engine uses this value to change player view angles, and then resets it to FAM_NOTHING. See FixAngleMode enum.</div></div>",644:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype644\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> idealpitch</div></div><div class=\"TTSummary\">Entity ideal pitch. Used in conjunction with pitch_speed to interpolate the entity\'s current pitch angle to this value.</div></div>",645:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype645\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> pitch_speed</div></div><div class=\"TTSummary\">Entity pitch speed. See idealpitch.</div></div>",646:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype646\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> ideal_yaw</div></div><div class=\"TTSummary\">Entity ideal yaw. Used in conjunction with yaw_speed to interpolate the entity\'s current yaw angle to this value.</div></div>",647:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype647\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> yaw_speed</div></div><div class=\"TTSummary\">Entity yaw speed. See ideal_yaw.</div></div>",648:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype648\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const int</span> modelindex</div></div><div class=\"TTSummary\">Entity model index. If this entity has a model, is the unique index of the model. Otherwise, is 0.</div></div>",649:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype649\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t model</div></div><div class=\"TTSummary\">The entity model name. If this entity has a model, is the name of that model. Otherwise, is an empty string.Use g_EntityFuncs.SetModel to set this variable.</div></div>",650:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype650\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t viewmodel</div></div><div class=\"TTSummary\">Player view model index. If this player has a visible weapon, is the name of that view (v_) model. Otherwise, is an empty string.</div></div>",651:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype651\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t weaponmodel</div></div><div class=\"TTSummary\">Entity weapon model index. If this player has a visible weapon, is the name of that third person (p_) model. Otherwise, is an empty string.</div></div>",652:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype652\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector absmin</div></div><div class=\"TTSummary\">Entity absolute minimum size. Is an absolute position in the world. Automatically updated by the engine.</div></div>",653:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype653\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector absmax</div></div><div class=\"TTSummary\">Entity absolute maximum size. Is an absolute position in the world. Automatically updated by the engine.</div></div>",654:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype654\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector mins</div></div><div class=\"TTSummary\">Entity minimum size. Relative to the player\'s origin.</div></div>",655:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype655\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector maxs</div></div><div class=\"TTSummary\">Entity maximum size. Relative to the player\'s origin.</div></div>",656:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype656\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector size</div></div></div>",657:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype657\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> ltime</div></div><div class=\"TTSummary\">Entity ltime. The last time this entity has executed its think function. Otherwise, is 0.</div></div>",658:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype658\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> nextthink</div></div><div class=\"TTSummary\">Entity next think time. The next time this entity will execute its think function, as an absolute time value. Otherwise, is 0.</div></div>",659:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype659\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> movetype</div></div><div class=\"TTSummary\">Entity movetype</div></div>",660:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype660\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> solid</div></div><div class=\"TTSummary\">Entity solid flag</div></div>",661:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype661\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> skin</div></div><div class=\"TTSummary\">Entity skin index. Used by entities with studio models to set which skin to use.</div></div>",662:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype662\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> body</div></div><div class=\"TTSummary\">Entity body index. Used by entities with studio models to set which body to use.</div></div>",663:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype663\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> effects</div></div><div class=\"TTSummary\">Entity effects</div></div>",664:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype664\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> gravity</div></div><div class=\"TTSummary\">Entity gravity. Is a scalar between 0 and 1, inclusive.</div></div>",665:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype665\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> friction</div></div><div class=\"TTSummary\">Entity friction. Is a scalar between 0 and 1, inclusive.</div></div>",666:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype666\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> light_level</div></div><div class=\"TTSummary\">Player only light level. This is a single value between 0 and 255 inclusive. Use g_EngineFuncs.GetEntityIllum to retrieve this value.</div></div>",667:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype667\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> sequence</div></div><div class=\"TTSummary\">Entity sequence. Used by entities with studio models to set which sequence to use.</div></div>",668:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype668\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> gaitsequence</div></div><div class=\"TTSummary\">Entity gait sequence. Used by entities with studio models for walking sequences.</div></div>",669:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype669\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> frame</div></div><div class=\"TTSummary\">Entity frame. Used by entities with studio models to set the current frame that a sequence is using. Automatically incremented.Used by brush models for animated textures: 1 for animated, 0 for off.</div></div>",670:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype670\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> animtime</div></div><div class=\"TTSummary\">Entity animation time. Used for internal operations.</div></div>",671:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype671\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> framerate</div></div><div class=\"TTSummary\">Entity framerate. used by entities with studio models to control sequence frame rate.</div></div>",672:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype672\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> scale</div></div><div class=\"TTSummary\">Entity rendering scale (0..255). Applies to studio and sprite models.</div></div>",673:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype673\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> rendermode</div></div><div class=\"TTSummary\">Entity render mode. See RenderModes enum.</div></div>",674:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype674\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> renderamt</div></div><div class=\"TTSummary\">Entity render amount (0..255)</div></div>",675:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype675\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector rendercolor</div></div><div class=\"TTSummary\">Entity render color (rgb)</div></div>",676:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype676\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> renderfx</div></div><div class=\"TTSummary\">Entity render fx</div></div>",677:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype677\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> health</div></div><div class=\"TTSummary\">Entity health. Do not set directly unless you are absolutely sure you know what you are doing.</div></div>",678:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype678\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> frags</div></div><div class=\"TTSummary\">Entity frags. Usually used for the number of kills or score.</div></div>",679:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype679\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> weapons</div></div><div class=\"TTSummary\">Entity weapons bit vector. Largely used by monsters to track which weapons they have, and by players for internal purposes.</div></div>",680:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype680\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> takedamage</div></div><div class=\"TTSummary\">Entity take damage flag</div></div>",681:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype681\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> deadflag</div></div><div class=\"TTSummary\">Entity dead flag</div></div>",682:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype682\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector view_ofs</div></div><div class=\"TTSummary\">Entity view offset. Used to set an eye offset.</div></div>",683:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype683\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> button</div></div><div class=\"TTSummary\">Entity button bit vector. Usually used to track which buttons the player is currently pressing.</div></div>",684:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype684\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> impulse</div></div><div class=\"TTSummary\">Entity impulse bit vector. Used for various internal operations.</div></div>",685:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype685\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ chain</div></div><div class=\"TTSummary\">Entity pointer when linked into a linked list. Used for temporary lists.</div></div>",686:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype686\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ dmg_inflictor</div></div><div class=\"TTSummary\">Entity damage inflictor</div></div>",687:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype687\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ enemy</div></div><div class=\"TTSummary\">Entity enemy</div></div>",688:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype688\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ aiment</div></div><div class=\"TTSummary\">Entity pointer when MOVETYPE_FOLLOW</div></div>",689:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype689\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ owner</div></div><div class=\"TTSummary\">Entity owner</div></div>",690:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype690\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ groundentity</div></div><div class=\"TTSummary\">Entity ground entity</div></div>",691:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype691\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> spawnflags</div></div><div class=\"TTSummary\">Entity spawn flags</div></div>",692:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype692\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> flags</div></div><div class=\"TTSummary\">Entity flags</div></div>",693:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype693\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> colormap</div></div><div class=\"TTSummary\">Entity color map. Used for player model colors.</div></div>",694:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype694\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> team</div></div><div class=\"TTSummary\">Entity team. Reserved for future use.</div></div>",695:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype695\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> max_health</div></div><div class=\"TTSummary\">Entity maximum health</div></div>",696:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype696\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> teleport_time</div></div><div class=\"TTSummary\">Entity teleport time. Intended for internal operations.</div></div>",697:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype697\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> armortype</div></div><div class=\"TTSummary\">Entity armor type. Represents maximum armor (similar to max_health).</div></div>",698:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype698\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> armorvalue</div></div><div class=\"TTSummary\">Entity armor value</div></div>",699:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype699\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> waterlevel</div></div><div class=\"TTSummary\">Entity water level</div></div>",700:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype700\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> watertype</div></div><div class=\"TTSummary\">Player only. Contains the type of water contents the player is currently in. See CONTENTS enum.</div></div>",701:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype701\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t target</div></div><div class=\"TTSummary\">The entity target. If set, is the name of one or more targets to trigger. Otherwise, is empty.</div></div>",702:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype702\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t targetname</div></div><div class=\"TTSummary\">The entity target name</div></div>",703:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype703\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t netname</div></div><div class=\"TTSummary\">The entity net name. Used for various things, such as the player\'s name.</div></div>",704:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype704\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t message</div></div><div class=\"TTSummary\">The entity message. Used for various things.</div></div>",705:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype705\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> dmg_take</div></div><div class=\"TTSummary\">Entity damage take. Used for internal operations.</div></div>",706:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype706\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> dmg_save</div></div><div class=\"TTSummary\">Entity damage save. Used for internal operations.</div></div>",707:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype707\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> dmg</div></div><div class=\"TTSummary\">Entity damage. Usually stores how much damage this entity can do to other entities.</div></div>",708:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype708\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> dmgtime</div></div><div class=\"TTSummary\">Entity damage time. Time at which this entity last took damage. Usually used to limit damage effects from being shown too often.</div></div>",709:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype709\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t noise</div></div><div class=\"TTSummary\">Entity noise. Usually used to store a sound name.</div></div>",710:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype710\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t noise1</div></div><div class=\"TTSummary\">Entity noise 1. Usually used to store a sound name.</div></div>",711:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype711\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t noise2</div></div><div class=\"TTSummary\">Entity noise 2. Usually used to store a sound name.</div></div>",712:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype712\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">string_t noise3</div></div><div class=\"TTSummary\">Entity noise 3. Usually used to store a sound name.</div></div>",713:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype713\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> speed</div></div><div class=\"TTSummary\">Entity speed</div></div>",714:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype714\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> air_finished</div></div><div class=\"TTSummary\">Player air finished. Time at which the player runs out of air when underwater.</div></div>",715:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype715\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> pain_finished</div></div><div class=\"TTSummary\">Player pain finished. Time at which the player can take damage again while drowning.</div></div>",716:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype716\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> radsuit_finished</div></div><div class=\"TTSummary\">Entity radiation suit finished. Reserved for future use.</div></div>",717:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype717\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> playerclass</div></div><div class=\"TTSummary\">Entity player class. Reserved for future use.</div></div>",718:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype718\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> maxspeed</div></div><div class=\"TTSummary\">Entity maximum speed</div></div>",719:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype719\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> fov</div></div><div class=\"TTSummary\">Player field of view</div></div>",720:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype720\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> weaponanim</div></div><div class=\"TTSummary\">Player weapon animation</div></div>",721:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype721\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> pushmsec</div></div><div class=\"TTSummary\">Entity push milliseconds. Used for internal operations.</div></div>",722:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype722\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> bInDuck</div></div><div class=\"TTSummary\">Entity ducking flag. Used for internal operations.</div></div>",723:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype723\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> flTimeStepSound</div></div><div class=\"TTSummary\">Entity time of step sound. Used for internal operations.</div></div>",724:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype724\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> flSwimTime</div></div><div class=\"TTSummary\">Entity swim time. Used for internal operations.</div></div>",725:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype725\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> flDuckTime</div></div><div class=\"TTSummary\">Entity duck time. Used for internal operations.</div></div>",726:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype726\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> iStepLeft</div></div><div class=\"TTSummary\">Entity step left flag. Used for internal operations.</div></div>",727:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype727\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> flFallVelocity</div></div><div class=\"TTSummary\">Player fall velocity.</div></div>",728:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype728\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> gamestate</div></div><div class=\"TTSummary\">Entity gamestate. Reserved for future use.</div></div>",729:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype729\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> oldbuttons</div></div><div class=\"TTSummary\">Player old buttons. Previous frame\'s contents of buttons.</div></div>",730:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype730\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> groupinfo</div></div><div class=\"TTSummary\">Entity group info. Used for internal operations.</div></div>",731:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype731\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> iuser1</div></div><div class=\"TTSummary\">User variable 1 (integer)</div></div>",732:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype732\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> iuser2</div></div><div class=\"TTSummary\">User variable 2 (integer)</div></div>",733:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype733\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> iuser3</div></div><div class=\"TTSummary\">User variable 3 (integer)</div></div>",734:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype734\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> iuser4</div></div><div class=\"TTSummary\">User variable 4 (integer)</div></div>",735:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype735\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> fuser1</div></div><div class=\"TTSummary\">User variable 1 (float)</div></div>",736:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype736\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> fuser2</div></div><div class=\"TTSummary\">User variable 2 (float)</div></div>",737:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype737\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> fuser3</div></div><div class=\"TTSummary\">User variable 3 (float)</div></div>",738:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype738\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> fuser4</div></div><div class=\"TTSummary\">User variable 4 (float)</div></div>",739:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype739\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector vuser1</div></div><div class=\"TTSummary\">User variable 1 (Vector)</div></div>",740:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype740\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector vuser2</div></div><div class=\"TTSummary\">User variable 2 (Vector)</div></div>",741:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype741\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector vuser3</div></div><div class=\"TTSummary\">User variable 3 (Vector)</div></div>",742:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype742\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Vector vuser4</div></div><div class=\"TTSummary\">User variable 4 (Vector)</div></div>",743:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype743\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ euser1</div></div><div class=\"TTSummary\">User variable 1 (Edict)</div></div>",744:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype744\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ euser2</div></div><div class=\"TTSummary\">User variable 2 (Edict)</div></div>",745:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype745\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ euser3</div></div><div class=\"TTSummary\">User variable 3 (Edict)</div></div>",746:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype746\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">edict_t@ euser4</div></div><div class=\"TTSummary\">User variable 4 (Edict)</div></div>"});