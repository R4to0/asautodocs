﻿NDSummary.OnToolTipsLoaded("AngelscriptClass:Hooks.Player",{8823:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8823\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::CanPlayerUseReservedSlot</div></div><div class=\"TTSummary\">Called when a player connects to the server, and the number of slots left on the server is &lt;= the number of reserved slots. Set bAllowJoin to true to allow the player to join (default false).</div></div>",8805:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8805\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::ClientConnected</div></div><div class=\"TTSummary\">Called when a player connects to the server. if bDisallowJoin is set to false, the player is disconnected. szRejectReason is shown to the player if disconnected. The maximum length of the reject reason string is 127 characters.</div></div>",8799:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8799\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::ClientDisconnect</div></div><div class=\"TTSummary\">Called when a player disconnects. Note that this is only called if the player was fully connected, meaning the player went through ClientPutInServer. This is never called for the local host.</div></div>",8829:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8829\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::ClientPutInServer</div></div><div class=\"TTSummary\">Called when a player has finished connecting and is put into the world. It is safe to send network messages to the player at this point.</div></div>",8793:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8793\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::ClientSay</div></div><div class=\"TTSummary\">Called when a player says something in game chat. The SayParameters class can be used to manipulate input and veto the message.</div></div>",8778:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8778\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::GetPlayerSpawnSpot</div></div><div class=\"TTSummary\">Called when a player is about to get a spawn point before (re)spawning.</div></div>",8634:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8634\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerCanRespawn</div></div><div class=\"TTSummary\">Called when the game wants to know if the player should be able to respawn or not.Set bCanRespawn to false to disallow, default true.</div></div>",8628:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8628\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerDecal</div></div><div class=\"TTSummary\">Called when a player is spraypainting a decal onto a surface. The given trace result contains the surface information.</div></div>",8643:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8643\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerEnteredObserver</div></div><div class=\"TTSummary\">Called when a player enters observer mode.</div></div>",8631:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8631\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerKilled</div></div><div class=\"TTSummary\">Called when a player is killed.</div></div>",8625:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8625\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerLeftObserver</div></div><div class=\"TTSummary\">Called when a player leaves observer mode.</div></div>",8622:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8622\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerPostThink</div></div><div class=\"TTSummary\">Called when the player is processing post think events.</div></div>",8613:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8613\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerPreDecal</div></div><div class=\"TTSummary\">Called when a player attempts to spraypaint a decal onto a surface. The given trace result contains the surface information. Set bResult to false if the player shouldn\'t be able to spray.</div></div>",8619:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8619\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerPreThink</div></div><div class=\"TTSummary\">Called when the player is processing pre think events.</div></div>",8607:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8607\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerSpawn</div></div><div class=\"TTSummary\">Called when a player (re)spawns.</div></div>",8601:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8601\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerTakeDamage</div></div><div class=\"TTSummary\">Called when a player takes damage. Note that the victim entity can\'t be changed at this point.</div></div>",8616:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype8616\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const uint32</span> Hooks::Player::PlayerUse</div></div><div class=\"TTSummary\">Called when the game is processing player use input. Note that this occurs even if the player has not pressed their use key.</div></div>"});