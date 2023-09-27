﻿NDSummary.OnToolTipsLoaded("File:Classes/BLOB.as",{6096:"<div class=\"NDToolTip TClass LAngelscript\"><div class=\"TTSummary\">Global namespace.</div></div>",6099:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6099\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> HasAllocatedBuffer() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this instance has allocated a buffer.</div></div>",6100:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6100\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetSizeInBytes() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the size of this BLOB, in bytes.</div></div>",6101:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6101\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetReadOffset() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the read offset, in bytes.</div></div>",6102:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6102\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ReadReachedEnd() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether the last read operation reached the end of data that was written to this BLOB.</div></div>",6103:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6103\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> ReadSizeValid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">uiSizeInBytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns whether the given amount of bytes can be read from this BLOB.</div></div>",6104:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6104\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetWriteOffset() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the write offset, in bytes. This is the number of bytes written to this buffer.</div></div>",6105:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6105\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> CanWriteSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">uiSizeInBytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns whether the given amount of bytes can be written to this BLOB.</div></div>",6106:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6106\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetWriteBytesLeft() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the number of bytes left that can be written to. This may change if a write operation causes the buffer to be resized.</div></div>",6107:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6107\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> CanResize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this BLOB is allowed to resize its buffer.</div></div>",6108:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6108\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetCanResize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">fState</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets whether this BLOB is allowed to resize its buffer.</div></div>",6109:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6109\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int8</span> ReadInt8()</div></div><div class=\"TTSummary\">Reads an int8 from this BLOB.</div></div>",6110:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6110\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int16</span> ReadInt16()</div></div><div class=\"TTSummary\">Reads an int16 from this BLOB.</div></div>",6111:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6111\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int32</span> ReadInt32()</div></div><div class=\"TTSummary\">Reads an int32 from this BLOB.</div></div>",6112:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6112\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int64</span> ReadInt64()</div></div><div class=\"TTSummary\">Reads an int64 from this BLOB.</div></div>",6113:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6113\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">uint8</span> ReadUInt8()</div></div><div class=\"TTSummary\">Reads a uint8 from this BLOB.</div></div>",6114:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6114\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int16</span> ReadUInt16()</div></div><div class=\"TTSummary\">Reads a uint16 from this BLOB.</div></div>",6115:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6115\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int32</span> ReadUInt32()</div></div><div class=\"TTSummary\">Reads a uint32 from this BLOB.</div></div>",6116:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6116\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int64</span> ReadUInt64()</div></div><div class=\"TTSummary\">Reads a uint64 from this BLOB.</div></div>",6117:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6117\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> ReadFloat()</div></div><div class=\"TTSummary\">Reads a float from this BLOB.</div></div>",6118:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6118\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">double</span> ReadDouble()</div></div><div class=\"TTSummary\">Reads a double from this BLOB.</div></div>",6119:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6119\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int8</span> ReadInt8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads an int8 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6120:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6120\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int16</span> ReadInt16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads an int16 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6121:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6121\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int32</span> ReadInt32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads an int32 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6122:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6122\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int64</span> ReadInt64(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads an int64 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6123:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6123\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> ReadUInt8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a uint8 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6124:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6124\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int16</span> ReadUInt16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a uint16 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6125:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6125\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int32</span> ReadUInt32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a uint32 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6126:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6126\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int64</span> ReadUInt64(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a uint64 from this BLOB. fSuccess is true if the read succeeded.</div></div>",6127:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6127\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> ReadFloat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a float from this BLOB. fSuccess is true if the read succeeded.</div></div>",6128:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6128\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> ReadDouble(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a double from this BLOB. fSuccess is true if the read succeeded.</div></div>",6129:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6129\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> ReadString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">uiSizeInBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a fixed length string from this BLOB.</div></div>",6130:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6130\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> ReadString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">uiSizeInBytes,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a fixed length string from this BLOB. fSuccess is true if the read succeeded.</div></div>",6131:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6131\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">string</span> ReadString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">bool</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PName last\">fSuccess</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a variable length string from this BLOB. fSuccess is true if the read succeeded.</div></div>",6132:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6132\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">string</span> ReadString()</div></div><div class=\"TTSummary\">Reads a variable length string from this BLOB.</div></div>",6133:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6133\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> WriteBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName\">uiSizeInBytes,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">iValue</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a given value a number of bytes to this BLOB. Returns true if the write succeeded.</div></div>",6134:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6134\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> WriteBytesUntil(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName\">uiEndOffset,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">iValue</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a given value until the given end offset to this BLOB. Returns true if the write succeeded.</div></div>",6135:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6135\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int8</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes an int8 to this BLOB. Returns true if the write succeeded.</div></div>",6136:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6136\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes an int16 to this BLOB. Returns true if the write succeeded.</div></div>",6137:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6137\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int32</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes an int32 to this BLOB. Returns true if the write succeeded.</div></div>",6138:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6138\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int64</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes an int64 to this BLOB. Returns true if the write succeeded.</div></div>",6139:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6139\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a uint8 to this BLOB. Returns true if the write succeeded.</div></div>",6140:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6140\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a uint16 to this BLOB. Returns true if the write succeeded.</div></div>",6141:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6141\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a uint32 to this BLOB. Returns true if the write succeeded.</div></div>",6142:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6142\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a uint64 to this BLOB. Returns true if the write succeeded.</div></div>",6143:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6143\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a float to this BLOB. Returns true if the write succeeded.</div></div>",6144:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6144\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a double to this BLOB. Returns true if the write succeeded.</div></div>",6145:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6145\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szString,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">uiSizeInBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a fixed length string to this BLOB. Returns true if the write succeeded.</div></div>",6146:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6146\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PName last\">szString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a variable length string to this BLOB. Returns true if the write succeeded.</div></div>",6147:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6147\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Resize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">uiNewSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Resizes this BLOB. Data may be lost because of this.</div></div>",6148:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6148\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Reserve(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">uiMinimumSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reserves the given amount of space, if needed.</div></div>",6149:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6149\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> ShrinkToFit()</div></div><div class=\"TTSummary\">Shrinks this BLOB to fit the data that was written to it.</div></div>",6150:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype6150\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Clear()</div></div><div class=\"TTSummary\">Clears this BLOB of all data and allocated memory. All flags are reset to their default values.</div></div>"});