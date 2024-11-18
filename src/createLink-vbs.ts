export const vbsScripts = `option explicit

dim strFilepath, strLinkFilepath, strLinkName, strLinkArgs, strLinkDescription, strLinkCwd, strLinkIcon, strLinkWindowMode, strLinkHotkey
strFilepath = Wscript.Arguments(0)
strLinkFilepath = Wscript.Arguments(1)
strLinkName = Wscript.Arguments(2)
strLinkArgs = Replace(Wscript.Arguments(3), "'", """")
strLinkDescription = Wscript.Arguments(4)
strLinkCwd = Wscript.Arguments(5)
strLinkIcon = Wscript.Arguments(6)
strLinkWindowMode = Wscript.Arguments(7)
strLinkHotkey = Wscript.Arguments(8)

dim objShell, strDesktopPath, objLink
set objShell = CreateObject("WScript.Shell")

If strLinkFilepath = "" Then
  strLinkFilepath = objShell.SpecialFolders("Desktop")
End If

set objLink = objShell.CreateShortcut(strLinkFilepath + "\" + strLinkName + ".lnk")
objLink.Arguments = strLinkArgs
objLink.Description = strLinkDescription
objLink.TargetPath = strFilepath
objLink.WindowStyle = strLinkWindowMode
objLink.WorkingDirectory = strLinkCwd
objLink.Hotkey = strLinkHotkey
objLink.Save
`;
