## Example Plugin for Obsidian PDF View Bug Report

### Steps to reproduce

1. Build the plugin by `pnpm i` & `pnpm build`, then install and enable it.
2. Add a PDF file to the vault (you can use [this sample PDF](https://github.com/RyotaUshio/obsidian-pdf-plus/blob/main/samples/Lorem%20Ipsum.pdf)).
3. Open a markdown view on the left and a PDF view on the right.
4. Click the markdown view.
5. Click the PDF view. Now, the active leaf is the PDF leaf.
6. Run the "Test" command from the command palette. This command uses `checkCallback`, and it will show up in the command palette only when the PDF view is active, and in such a case, running the command should show a notification saying "Active PDF view found".

### Did you follow the troubleshooting guide? [Y/N]

Yes. This bug can be reproduced in the sandbox vault with only this example plugin being enabled. However, it might not always happen consistently.

### Expected result

Because the PDF leaf became active before opening the command palette, the command should run successfully and show the notification.

### Actual result

The notification is not shown despite the command being displayed in the command palette.

### Environment

```
SYSTEM INFO:
	Obsidian version: v1.8.9
	Installer version: v1.8.9
	Operating system: Darwin Kernel Version 22.6.0: Mon Feb 19 19:43:41 PST 2024; root:xnu-8796.141.3.704.6~1/RELEASE_ARM64_T8103 22.6.0
	Login status: logged in
	Language: en
	Catalyst license: insider
	Insider build toggle: on
	Live preview: on
	Base theme: adapt to system
	Community theme: none
	Snippets enabled: 0
	Restricted mode: off
	Plugins installed: 1
	Plugins enabled: 1
		1: Bug Report v1.0.0

RECOMMENDATIONS:
	Community plugins: for bugs, please first try updating all your plugins to latest. If still not fixed, please try to make the issue happen in the Sandbox Vault or disable community plugins.
```

----------

### Additional information

- The forth step seems redundant, however if you skip it, the bug cannot be reproduced.
- Screen recording: 
