import { EditableFileView, Notice, Plugin } from 'obsidian';


export default class MyPlugin extends Plugin {
	async onload() {
		// A command that can be executed only when a PDF view is active
		this.addCommand({
			id: 'test',
			name: 'Test',
			checkCallback: (checking) => {
				const pdfView = this.getActivePdfView();
				if (!pdfView) return false;

				if (!checking) {
					new Notice('Active PDF view found');
				}

				return true;
			}
		});
	}

	getActivePdfView() {
		// avoid using activeLeaf directly
		const view = this.app.workspace.getActiveViewOfType(EditableFileView);
		if (view && view.getViewType() === 'pdf') {
			return view;
		}
		return null;
	}
}
