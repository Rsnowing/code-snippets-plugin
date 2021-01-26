// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "reg-collect" is now active!');
	// 查看所有正则 ax-reg 是命令， reg-collect是插件名（不同于插件市场的名称）
	let regCommand = vscode.commands.registerCommand('reg-collect.ax-reg', () => {
		vscode.window.showInformationMessage('输入ax即可查看正则');
	});

	// 打开webview
	let panelCommand = vscode.commands.registerCommand('reg-collect.ax-tips', () => {
		const panel = vscode.window.createWebviewPanel('正则提示','正则提示',vscode.ViewColumn.One, {});
		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(regCommand);
	context.subscriptions.push(panelCommand);
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>正则提示</title>
</head>
<body>
正则提示
</body>
</html>`;
}

// this method is called when your extension is deactivated
export function deactivate() {}
