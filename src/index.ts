export * from "./help";

export function genChromeLnkOptions({
  filepath,
  linkFilepath,
  storagePath,
  linkName,
}: {
  filepath: string;
  storagePath: string;
  linkFilepath?: string;
  linkName: string;
}) {
  const options = {
    filepath,
    linkFilepath: linkFilepath || ".",
    linkArgs: `--user-data-dir='${storagePath}'`,
    linkName,
  };

  return options;
}
