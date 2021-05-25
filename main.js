const { window, commands } = require('vscode');

const runConfig = {
	'run': ['', ''],
	'run_qjs': ['qjs ', ''],
	'run_node': ['node ', ''],
	'run_python': ['python ', ''],
	'run_python3': ['python3 ', ''],
	'run_lua': ['lua ', ''],
};

function getCallback(command) {
	let [prefix, suffix] = runConfig[command];
	return async (textEditor, edit, ...args) => {
		let term;
		if (window.terminals.length == 0) {
			term = window.createTerminal();
		}
		if (window.activeTerminal) {
			term = window.activeTerminal;
		}
		term.show(true);
		await textEditor.document.save();
		term.sendText(prefix + textEditor.document.fileName + suffix);
	}
}

exports.activate = context => {
	for (let c in runConfig) {
		context.subscriptions.push(commands.registerTextEditorCommand(c, getCallback(c)));
	}
}

exports.deactivate = () => { }