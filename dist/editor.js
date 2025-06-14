const ICON_HEADING = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h12M6 20V4M10 20V4M14 20V4M18 20V4"/></svg>`;
const ICON_BOLD = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>`;
const ICON_ITALIC = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>`;
const ICON_STRIKETHROUGH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`;
const ICON_LINK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
const ICON_UL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/></svg>`;
const ICON_OL = `<svg viewBox="0 0 24 24" fill="none"><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="6" x2="22" y2="6"/><line x1="10" y1="12" x2="22" y2="12"/><line x1="10" y1="18" x2="22" y2="18"/></g><g fill="currentColor" font-family="sans-serif" font-size="6" text-anchor="middle" dominant-baseline="middle"><text x="5" y="6.5">1</text><text x="5" y="12.5">2</text><text x="5" y="18.5">3</text></g></svg>`;
const ICON_OUTDENT = `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 8 3 12 7 16"></polyline><line x1="21" y1="12" x2="3" y2="12"></line><line x1="21" y1="5" x2="9" y2="5"></line><line x1="21" y1="19" x2="9" y2="19"></line></svg>`;
const ICON_INDENT = `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 8 21 12 17 16"></polyline><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="5" x2="15" y2="5"></line><line x1="3" y1="19" x2="15" y2="19"></line></svg>`;
const ICON_BLOCKQUOTE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`;
const ICON_HR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="12" x2="20" y2="12"/></svg>`;
const ICON_TABLE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`;
const ICON_CODEBLOCK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>`;
const ICON_INLINECODE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.75 4.75L9 19.25"/><path d="M15.25 4.75L13.5 19.25"/><path d="M19.25 7.5L22 10.5L19.25 13.5"/><path d="M4.75 7.5L2 10.5L4.75 13.5"/></svg>`;
const ICON_IMAGE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
const ICON_TABLE_INSERT_ROW_ABOVE = `<svg viewBox="0 0 24 24" fill="none"><g fill="#4a90e2"><rect x="3" y="10" width="5" height="3" rx=".5"/><rect x="9" y="10" width="5" height="3" rx=".5"/><rect x="15" y="10" width="5" height="3" rx=".5"/></g><g fill="#999"><rect x="3" y="15" width="5" height="3" rx=".5"/><rect x="9" y="15" width="5" height="3" rx=".5"/><rect x="15" y="15" width="5" height="3" rx=".5"/></g><path stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8V4M10 5l2-2 2 2"/></svg>`;
const ICON_TABLE_INSERT_ROW_BELOW = `<svg viewBox="0 0 24 24" fill="none"><g fill="#999"><rect x="3" y="6" width="5" height="3" rx=".5"/><rect x="9" y="6" width="5" height="3" rx=".5"/><rect x="15" y="6" width="5" height="3" rx=".5"/></g><g fill="#4a90e2"><rect x="3" y="11" width="5" height="3" rx=".5"/><rect x="9" y="11" width="5" height="3" rx=".5"/><rect x="15" y="11" width="5" height="3" rx=".5"/></g><path stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16v4M10 19l2 2 2-2"/></svg>`;
const ICON_TABLE_INSERT_COL_LEFT = `<svg viewBox="0 0 24 24" fill="none"><g fill="#4a90e2"><rect x="9" y="6" width="3" height="4" rx=".5"/><rect x="9" y="11" width="3" height="4" rx=".5"/><rect x="9" y="16" width="3" height="4" rx=".5"/></g><g fill="#999"><rect x="14" y="6" width="3" height="4" rx=".5"/><rect x="14" y="11" width="3" height="4" rx=".5"/><rect x="14" y="16" width="3" height="4" rx=".5"/></g><path stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 12H3M4 10l-2 2 2 2"/></svg>`;
const ICON_TABLE_INSERT_COL_RIGHT = `<svg viewBox="0 0 24 24" fill="none"><g fill="#999"><rect x="7" y="6" width="3" height="4" rx=".5"/><rect x="7" y="11" width="3" height="4" rx=".5"/><rect x="7" y="16" width="3" height="4" rx=".5"/></g><g fill="#4a90e2"><rect x="12" y="6" width="3" height="4" rx=".5"/><rect x="12" y="11" width="3" height="4" rx=".5"/><rect x="12" y="16" width="3" height="4" rx=".5"/></g><path stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17 12h4M20 10l2 2-2 2"/></svg>`;

class MarkdownWYSIWYG {
    constructor(elementId, options = {}) {
        this.hostElement = document.getElementById(elementId);
        if (!this.hostElement) {
            throw new Error(`Elemento com ID '${elementId}' não encontrado.`);
        }
        this.options = {
            initialValue: '',
            showToolbar: true,
            buttons: [
                { id: 'h1', label: ICON_HEADING, title: 'Cabeçalho 1', type: 'block', mdPrefix: '# ', execCommand: 'formatBlock', value: 'H1' },
                { id: 'h2', label: ICON_HEADING, title: 'Cabeçalho 2', type: 'block', mdPrefix: '## ', execCommand: 'formatBlock', value: 'H2' },
                { id: 'h3', label: ICON_HEADING, title: 'Cabeçalho 3', type: 'block', mdPrefix: '### ', execCommand: 'formatBlock', value: 'H3' },
                { id: 'bold', label: ICON_BOLD, title: 'Negrito', execCommand: 'bold', type: 'inline', mdPrefix: '**', mdSuffix: '**' },
                { id: 'italic', label: ICON_ITALIC, title: 'Itálico', execCommand: 'italic', type: 'inline', mdPrefix: '*', mdSuffix: '*' },
                { id: 'strikethrough', label: ICON_STRIKETHROUGH, title: 'Riscado', execCommand: 'strikeThrough', type: 'inline', mdPrefix: '~~', mdSuffix: '~~' },
                { id: 'link', label: ICON_LINK, title: 'Link', action: '_insertLink', type: 'inline' },
                { id: 'ul', label: ICON_UL, title: 'Lista não ordenada', execCommand: 'insertUnorderedList', type: 'block-list', mdPrefix: '- ' },
                { id: 'ol', label: ICON_OL, title: 'Lista ordenada', execCommand: 'insertOrderedList', type: 'block-list', mdPrefix: '1. ' },
                { id: 'outdent', label: ICON_OUTDENT, title: 'Diminuir Recuo', action: '_handleOutdent', type: 'list-format' },
                { id: 'indent', label: ICON_INDENT, title: 'Aumentar Recuo', action: '_handleIndent', type: 'list-format' },
                { id: 'blockquote', label: ICON_BLOCKQUOTE, title: 'Citação', execCommand: 'formatBlock', value: 'BLOCKQUOTE', type: 'block', mdPrefix: '> ' },
                { id: 'hr', label: ICON_HR, title: 'Linha Horizontal', action: '_insertHorizontalRuleAction', type: 'block-insert' },
                { id: 'image', label: ICON_IMAGE, title: 'Inserir Imagem', action: '_insertImageAction', type: 'block-insert' },
                { id: 'table', label: ICON_TABLE, title: 'Inserir Tabela', action: '_insertTableAction', type: 'block-insert' },
                { id: 'codeblock', label: ICON_CODEBLOCK, title: 'Bloco de Código', action: '_insertCodeBlock', type: 'block-wrap', mdPrefix: '```\n', mdSuffix: '\n```' },
                { id: 'inlinecode', label: ICON_INLINECODE, title: 'Código em Linha', action: '_insertInlineCode', type: 'inline', mdPrefix: '`', mdSuffix: '`' }
            ],
            onUpdate: null,
            initialMode: 'wysiwyg',
            tableGridMaxRows: 10,
            tableGridMaxCols: 10,
            ...options
        };
        this.currentMode = this.options.initialMode;
        this.undoStack = [];
        this.redoStack = [];
        this.isUpdatingFromUndoRedo = false;

        this.currentSelectedGridRows = 1;
        this.currentSelectedGridCols = 1;
        this.savedRangeInfo = null;

        this.contextualTableToolbar = null;
        this.currentTableSelectionInfo = null;

        this.imageDialog = null;
        this.imageUrlInput = null;
        this.imageAltInput = null;

        this._init();
    }

    _init() {
        this.editorWrapper = document.createElement('div');
        this.editorWrapper.classList.add('md-wysiwyg-editor-wrapper');
        this.hostElement.appendChild(this.editorWrapper);

        this._boundListeners = {};
        this._boundListeners.handleSelectionChange = this._handleSelectionChange.bind(this);
        this._boundListeners.updateWysiwygToolbar = this._updateWysiwygToolbarActiveStates.bind(this);
        this._boundListeners.updateMarkdownToolbar = this._updateMarkdownToolbarActiveStates.bind(this);
        this._boundListeners.onWysiwygTabClick = () => this.switchToMode('wysiwyg');
        this._boundListeners.onMarkdownTabClick = () => this.switchToMode('markdown');
        this._boundListeners.closeTableGridOnClickOutside = this._closeTableGridOnClickOutside.bind(this);
        this._boundListeners.onEditableAreaClickForTable = this._handleEditableAreaClickForTable.bind(this);
        this._boundListeners.closeContextualTableToolbarOnClickOutside = this._closeContextualTableToolbarOnClickOutside.bind(this);
        this._boundListeners.syncScrollMarkdown = this._syncScrollMarkdown.bind(this);

        this.toolbarButtonListeners = [];
        if (this.options.showToolbar) {
            this._createToolbar();
        }
        this._createEditorContentArea();
        this._createTabs();
        this._createTableGridSelector();
        this._createContextualTableToolbar();
        this._createImageDialog();

        this.switchToMode(this.currentMode, true);
        this.setValue(this.options.initialValue || '', true);
        this._attachEventListeners();
        if (this.currentMode === 'wysiwyg') {
            this._pushToUndoStack(this.editableArea.innerHTML);
        } else {
            this._pushToUndoStack(this.markdownArea.value);
            this._updateMarkdownLineNumbers();
        }
        this._updateToolbarActiveStates();
        document.addEventListener('selectionchange', this._boundListeners.handleSelectionChange);
    }

    _createImageDialog() {
        this.imageDialog = document.createElement('dialog');
        this.imageDialog.classList.add('md-image-dialog');

        const form = document.createElement('form');
        form.method = 'dialog';
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const url = this.imageUrlInput.value.trim();
            const alt = this.imageAltInput.value.trim();
            if (url) {
                this._performInsertImage(url, alt || '');
                this.imageDialog.close();
            } else {
                this.imageUrlInput.focus();
            }
        });

        const heading = document.createElement('h3');
        heading.textContent = 'Inserir Imagem';
        heading.classList.add('md-image-dialog-heading');
        form.appendChild(heading);

        const urlLabel = document.createElement('label');
        urlLabel.htmlFor = 'md-image-url-input-' + this.editorWrapper.id;
        urlLabel.textContent = 'URL da Imagem:';
        urlLabel.classList.add('md-image-dialog-label');
        form.appendChild(urlLabel);

        this.imageUrlInput = document.createElement('input');
        this.imageUrlInput.type = 'url';
        this.imageUrlInput.id = 'md-image-url-input-' + this.editorWrapper.id;
        this.imageUrlInput.required = true;
        this.imageUrlInput.classList.add('md-image-dialog-input');
        form.appendChild(this.imageUrlInput);

        const altLabel = document.createElement('label');
        altLabel.htmlFor = 'md-image-alt-input-' + this.editorWrapper.id;
        altLabel.textContent = 'Texto Alternativo (Alt):';
        altLabel.classList.add('md-image-dialog-label');
        form.appendChild(altLabel);

        this.imageAltInput = document.createElement('input');
        this.imageAltInput.type = 'text';
        this.imageAltInput.id = 'md-image-alt-input-' + this.editorWrapper.id;
        this.imageAltInput.classList.add('md-image-dialog-input');
        form.appendChild(this.imageAltInput);

        const footer = document.createElement('footer');
        footer.classList.add('md-image-dialog-footer');

        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.textContent = 'Cancelar';
        cancelButton.classList.add('md-image-dialog-button');
        cancelButton.addEventListener('click', () => {
            this.imageDialog.close();
        });
        footer.appendChild(cancelButton);

        const insertButton = document.createElement('button');
        insertButton.type = 'submit';
        insertButton.textContent = 'Inserir';
        insertButton.classList.add('md-image-dialog-button', 'md-image-dialog-button-primary');
        footer.appendChild(insertButton);

        form.appendChild(footer);
        this.imageDialog.appendChild(form);
        this.editorWrapper.appendChild(this.imageDialog);

        this.imageDialog.addEventListener('close', () => {
            this.imageUrlInput.value = '';
            this.imageAltInput.value = '';
        });
    }


    _insertImageAction() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                this.savedRangeInfo = selection.getRangeAt(0).cloneRange();
            } else {
                const range = document.createRange();
                range.selectNodeContents(this.editableArea);
                range.collapse(false);
                this.savedRangeInfo = range;
            }
        } else {
            this.markdownArea.focus();
            this.savedRangeInfo = {
                start: this.markdownArea.selectionStart,
                end: this.markdownArea.selectionEnd
            };
        }
        this.imageDialog.showModal();
        this.imageUrlInput.focus();
    }

    _performInsertImage(url, alt) {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            let range;
            const selection = window.getSelection();

            if (this.savedRangeInfo instanceof Range && this.editableArea.contains(this.savedRangeInfo.commonAncestorContainer)) {
                range = this.savedRangeInfo;
                selection.removeAllRanges();
                selection.addRange(range);
            } else {
                if (selection.rangeCount > 0 && this.editableArea.contains(selection.getRangeAt(0).commonAncestorContainer)) {
                    range = selection.getRangeAt(0);
                } else {
                    range = document.createRange();
                    range.selectNodeContents(this.editableArea);
                    range.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }

            const img = document.createElement('img');
            img.src = url;
            img.alt = alt;

            range.deleteContents();

            const fragment = document.createDocumentFragment();
            fragment.appendChild(img);

            const pAfter = document.createElement('p');
            pAfter.innerHTML = '&#8203;';
            fragment.appendChild(pAfter);

            range.insertNode(fragment);

            range.setStart(pAfter, 1);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);

            this._finalizeUpdate(this.editableArea.innerHTML);

        } else {
            this.markdownArea.focus();
            let start, end;

            if (this.savedRangeInfo && typeof this.savedRangeInfo.start === 'number') {
                start = this.savedRangeInfo.start;
                end = this.savedRangeInfo.end;
            } else {
                start = this.markdownArea.selectionStart;
                end = this.markdownArea.selectionEnd;
            }

            const markdownImage = `![${alt}](${url})`;
            const textValue = this.markdownArea.value;

            let prefix = "";
            let suffix = "\n";

            if (start > 0 && textValue[start - 1] !== '\n') {
                prefix = "\n";
                if (start > 1 && textValue[start - 2] !== '\n') {
                    prefix = "\n\n";
                }
            } else if (start > 0 && textValue[start - 1] === '\n') {
                if (start > 1 && textValue[start - 2] !== '\n') {
                    prefix = "\n";
                }
            }


            if (end < textValue.length && textValue[end] !== '\n') {
                suffix = "\n\n";
            } else if (end < textValue.length && textValue[end] === '\n') {
                if (end + 1 < textValue.length && textValue[end + 1] !== '\n') {
                    suffix = "\n";
                } else {
                    suffix = "";
                }
            } else {
                suffix = "\n";
            }


            const textToInsert = prefix + markdownImage + suffix;
            const textBeforeSelection = textValue.substring(0, start);
            const textAfterSelection = textValue.substring(end);

            this.markdownArea.value = textBeforeSelection + textToInsert + textAfterSelection;
            let newCursorPos = start + prefix.length + markdownImage.length;


            this.markdownArea.setSelectionRange(newCursorPos, newCursorPos);
            this._finalizeUpdate(this.markdownArea.value);
        }
        this.savedRangeInfo = null;
    }


    _createContextualTableToolbar() {
        this.contextualTableToolbar = document.createElement('div');
        this.contextualTableToolbar.classList.add('md-contextual-table-toolbar');

        const buttons = [
            { id: 'insertRowAbove', label: ICON_TABLE_INSERT_ROW_ABOVE, title: 'Inserir Linha Acima', action: () => this._insertRowWysiwyg(true) },
            { id: 'insertRowBelow', label: ICON_TABLE_INSERT_ROW_BELOW, title: 'Inserir Linha Abaixo', action: () => this._insertRowWysiwyg(false) },
            { id: 'insertColLeft', label: ICON_TABLE_INSERT_COL_LEFT, title: 'Inserir Coluna à Esquerda', action: () => this._insertColumnWysiwyg(true) },
            { id: 'insertColRight', label: ICON_TABLE_INSERT_COL_RIGHT, title: 'Inserir Coluna à Direita', action: () => this._insertColumnWysiwyg(false) },
        ];

        buttons.forEach(btnConfig => {
            const button = document.createElement('button');
            button.type = 'button';
            button.classList.add('md-contextual-table-toolbar-button', `md-ctt-button-${btnConfig.id}`);
            button.innerHTML = btnConfig.label;
            button.title = btnConfig.title;
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.currentTableSelectionInfo) {
                    btnConfig.action();
                }
            });
            this.contextualTableToolbar.appendChild(button);
        });
        this.editorWrapper.appendChild(this.contextualTableToolbar);
    }

    _showContextualTableToolbar(refElement) {
        if (!this.contextualTableToolbar || !refElement) return;
        this.contextualTableToolbar.style.display = 'flex';

        const cellRect = refElement.getBoundingClientRect();
        const editorWrapperRect = this.editorWrapper.getBoundingClientRect();
        const toolbarHeight = this.contextualTableToolbar.offsetHeight;
        const toolbarWidth = this.contextualTableToolbar.offsetWidth;

        let top = cellRect.top - editorWrapperRect.top - toolbarHeight - 5;
        let left = cellRect.left - editorWrapperRect.left;

        if (top < 0) {
            top = cellRect.bottom - editorWrapperRect.top + 5;
        }
        if (left + toolbarWidth > editorWrapperRect.width) {
            left = editorWrapperRect.width - toolbarWidth - 5;
        }
        if (left < 0) {
            left = 5;
        }

        this.contextualTableToolbar.style.top = `${top}px`;
        this.contextualTableToolbar.style.left = `${left}px`;

        this._boundListeners.closeContextualTableToolbarOnEsc = (e) => this._handlePopupEscKey(e, this._hideContextualTableToolbar.bind(this));
        document.addEventListener('click', this._boundListeners.closeContextualTableToolbarOnClickOutside, true);
        document.addEventListener('keydown', this._boundListeners.closeContextualTableToolbarOnEsc, true);
    }

    _hideContextualTableToolbar() {
        if (this.contextualTableToolbar) {
            this.contextualTableToolbar.style.display = 'none';
        }
        this.currentTableSelectionInfo = null;
        document.removeEventListener('click', this._boundListeners.closeContextualTableToolbarOnClickOutside, true);
        if (this._boundListeners.closeContextualTableToolbarOnEsc) {
            document.removeEventListener('keydown', this._boundListeners.closeContextualTableToolbarOnEsc, true);
        }
    }

    _closeContextualTableToolbarOnClickOutside(event) {
        if (this.contextualTableToolbar &&
            !this.contextualTableToolbar.contains(event.target) &&
            !this._findParentElement(event.target, ['TD', 'TH'])) {
            this._hideContextualTableToolbar();
        } else if (this.contextualTableToolbar && this.contextualTableToolbar.contains(event.target)) {
            // Clicked inside the toolbar, do nothing to close it
        } else {
            // Clicked somewhere else, but might be on a cell, so don't hide
        }
    }

    _handlePopupEscKey(event, hideMethod) {
        if (event.key === 'Escape') {
            hideMethod();
            event.preventDefault();
            event.stopPropagation();
        }
    }

    _handleEditableAreaClickForTable(event) {
        if (this.currentMode !== 'wysiwyg') return;

        const target = event.target;
        const cell = this._findParentElement(target, ['TD', 'TH']);

        if (cell && this.editableArea.contains(cell)) {
            const row = this._findParentElement(cell, 'TR');
            const table = this._findParentElement(row, 'TABLE');
            if (row && table) {
                this.currentTableSelectionInfo = {
                    cell: cell,
                    row: row,
                    table: table,
                    cellIndex: cell.cellIndex,
                    rowIndex: row.rowIndex
                };
                this._showContextualTableToolbar(cell);
            } else {
                this._hideContextualTableToolbar();
            }
        } else if (!this.contextualTableToolbar.contains(target)) {
            this._hideContextualTableToolbar();
        }
    }

    _insertRowWysiwyg(above) {
        if (!this.currentTableSelectionInfo) return;
        const { row: currentRow, table } = this.currentTableSelectionInfo;
        const parentSection = currentRow.parentNode;
        if (!parentSection || !['TBODY', 'THEAD', 'TFOOT'].includes(parentSection.nodeName)) {
            return;
        }

        const newRow = document.createElement('tr');
        let focusedCellIndex = this.currentTableSelectionInfo.cell.cellIndex;

        for (const c of currentRow.cells) {
            const newCellNode = document.createElement(c.nodeName); // Use same cell type (TH/TD)
            newCellNode.innerHTML = '&#8203;';
            if (c.colSpan > 1) { // Handle colspan
                newCellNode.colSpan = c.colSpan;
            }
            newRow.appendChild(newCellNode);
        }

        if (above) {
            parentSection.insertBefore(newRow, currentRow);
        } else {
            parentSection.insertBefore(newRow, currentRow.nextSibling);
        }

        const cellToFocus = newRow.cells[focusedCellIndex] || newRow.cells[0];
        if (cellToFocus) {
            this._focusCell(cellToFocus);
            this.currentTableSelectionInfo.cell = cellToFocus;
            this.currentTableSelectionInfo.row = newRow;
            this.currentTableSelectionInfo.rowIndex = newRow.rowIndex; // Update rowIndex
        }

        this._finalizeUpdate(this.editableArea.innerHTML);
        this._showContextualTableToolbar(cellToFocus || newRow.cells[0]); // Reshow toolbar related to new cell
    }

    _insertColumnWysiwyg(left) {
        if (!this.currentTableSelectionInfo) return;
        const { cell: currentCell, table } = this.currentTableSelectionInfo;

        const clickedCellVisualIndex = currentCell.cellIndex;
        const targetInsertVisualIndex = left ? clickedCellVisualIndex : clickedCellVisualIndex + 1;
        let newFocusedCellInCurrentRow = null;

        for (const row of table.rows) {
            // Determine cell type (TH for THEAD, TD for TBODY/TFOOT unless existing cells are TH)
            const cellType = (row.parentNode.nodeName === 'THEAD' || (row.cells[0] && row.cells[0].nodeName === 'TH')) ? 'th' : 'td';

            const newCell = document.createElement(cellType);
            newCell.innerHTML = '&#8203;';

            if (targetInsertVisualIndex >= row.cells.length) {
                row.appendChild(newCell);
            } else {
                row.insertBefore(newCell, row.cells[targetInsertVisualIndex]);
            }

            if (row === this.currentTableSelectionInfo.row) {
                newFocusedCellInCurrentRow = newCell;
            }
        }

        if (newFocusedCellInCurrentRow) {
            this._focusCell(newFocusedCellInCurrentRow);
            this.currentTableSelectionInfo.cell = newFocusedCellInCurrentRow; // Update current cell
            this.currentTableSelectionInfo.cellIndex = newFocusedCellInCurrentRow.cellIndex; // Update cellIndex
        }

        this._finalizeUpdate(this.editableArea.innerHTML);
        this._showContextualTableToolbar(newFocusedCellInCurrentRow || currentCell);
    }

    _focusCell(cellElement) {
        if (!cellElement) return;
        this.editableArea.focus(); // Ensure editor area has focus
        const range = document.createRange();
        const sel = window.getSelection();

        // Ensure cell has some content, otherwise range setting might fail in some browsers
        if (!cellElement.firstChild || (cellElement.firstChild.nodeType === Node.TEXT_NODE && cellElement.firstChild.textContent === '')) {
            cellElement.innerHTML = '&#8203;'; // Zero-width space
        }

        // Place cursor at the start of the cell content (or inside the ZWS)
        if (cellElement.firstChild) {
            const offset = (cellElement.firstChild.nodeType === Node.TEXT_NODE && cellElement.firstChild.textContent === '\u200B') ? 1 : 0;
            range.setStart(cellElement.firstChild, offset);
        } else {
            // Fallback if cell is truly empty even after adding ZWS (should not happen)
            range.selectNodeContents(cellElement);
        }
        range.collapse(true);

        sel.removeAllRanges();
        sel.addRange(range);
    }

    _createTableGridSelector() {
        this.tableGridSelector = document.createElement('div');
        this.tableGridSelector.classList.add('md-table-grid-selector');

        this.gridCellsContainer = document.createElement('div');
        this.gridCellsContainer.classList.add('md-table-grid-cells-container');
        this.gridCellsContainer.style.gridTemplateColumns = `repeat(${this.options.tableGridMaxCols}, 18px)`; // CSS for grid display

        this.tableGridCells = [];
        for (let r = 0; r < this.options.tableGridMaxRows; r++) {
            for (let c = 0; c < this.options.tableGridMaxCols; c++) {
                const cell = document.createElement('div');
                cell.classList.add('md-table-grid-cell');
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.addEventListener('mouseover', this._handleTableGridCellMouseover.bind(this));
                cell.addEventListener('click', this._handleTableGridCellClick.bind(this));
                this.gridCellsContainer.appendChild(cell);
                this.tableGridCells.push(cell);
            }
        }

        this.tableGridLabel = document.createElement('div');
        this.tableGridLabel.classList.add('md-table-grid-label');
        this.tableGridLabel.textContent = '1 x 1';

        this.tableGridSelector.appendChild(this.gridCellsContainer);
        this.tableGridSelector.appendChild(this.tableGridLabel);
        this.editorWrapper.appendChild(this.tableGridSelector);
    }

    _resetTableGridVisuals() {
        this.tableGridCells.forEach(cell => cell.classList.remove('highlighted'));
        this.currentSelectedGridRows = 1;
        this.currentSelectedGridCols = 1;
        this.tableGridLabel.textContent = '1 x 1';
        // Highlight the 1x1 cell by default
        const firstCell = this.gridCellsContainer.querySelector('[data-row="0"][data-col="0"]');
        if (firstCell) firstCell.classList.add('highlighted');
    }

    _showTableGridSelector(buttonElement) {
        if (this.tableGridSelector.style.display === 'block') return; // Already visible

        // Save current selection/range before showing the grid
        if (this.currentMode === 'wysiwyg') {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const currentRange = selection.getRangeAt(0);
                // Ensure the range is within the editable area
                if (this.editableArea.contains(currentRange.commonAncestorContainer)) {
                    this.savedRangeInfo = currentRange.cloneRange();
                } else { // Fallback if selection is outside, place at end
                    const range = document.createRange();
                    range.selectNodeContents(this.editableArea);
                    range.collapse(false); // to the end
                    this.savedRangeInfo = range;
                }
            } else { // No selection, place at end
                const range = document.createRange();
                range.selectNodeContents(this.editableArea);
                range.collapse(false);
                this.savedRangeInfo = range;
            }
        } else { // Markdown mode
            this.savedRangeInfo = {
                start: this.markdownArea.selectionStart,
                end: this.markdownArea.selectionEnd
            };
        }

        this._resetTableGridVisuals();
        this.tableGridSelector.style.display = 'block';
        const buttonRect = buttonElement.getBoundingClientRect();
        const editorRect = this.editorWrapper.getBoundingClientRect();

        // Position the grid below the button
        this.tableGridSelector.style.top = `${buttonRect.bottom - editorRect.top + 5}px`;
        this.tableGridSelector.style.left = `${buttonRect.left - editorRect.left}px`;

        // Adjust if it goes off-screen
        const gridRect = this.tableGridSelector.getBoundingClientRect();
        if (gridRect.right > window.innerWidth - 10) { // 10px buffer
            this.tableGridSelector.style.left = `${window.innerWidth - gridRect.width - 10 - editorRect.left}px`;
        }
        if (gridRect.left < 10) { // 10px buffer
            this.tableGridSelector.style.left = `${10 - editorRect.left}px`;
        }


        this._boundListeners.closeTableGridOnEsc = (e) => this._handlePopupEscKey(e, this._hideTableGridSelector.bind(this));
        document.addEventListener('click', this._boundListeners.closeTableGridOnClickOutside, true); // Use capture phase
        document.addEventListener('keydown', this._boundListeners.closeTableGridOnEsc, true);
    }

    _hideTableGridSelector() {
        if (!this.tableGridSelector || this.tableGridSelector.style.display === 'none') return;
        this.tableGridSelector.style.display = 'none';
        this.savedRangeInfo = null; // Clear saved range when grid is hidden without insertion
        document.removeEventListener('click', this._boundListeners.closeTableGridOnClickOutside, true);
        if (this._boundListeners.closeTableGridOnEsc) {
            document.removeEventListener('keydown', this._boundListeners.closeTableGridOnEsc, true);
        }
    }

    _closeTableGridOnClickOutside(event) {
        const tableButton = this.toolbar.querySelector('.md-toolbar-button-table'); // Get the table button
        if (this.tableGridSelector &&
            !this.tableGridSelector.contains(event.target) &&
            event.target !== tableButton && // Check if click is on the table button itself
            !tableButton.contains(event.target)) {
            this._hideTableGridSelector();
        }
    }

    _handleTableGridCellMouseover(event) {
        const targetCell = event.target.closest('.md-table-grid-cell');
        if (!targetCell) return;

        const hoverRow = parseInt(targetCell.dataset.row);
        const hoverCol = parseInt(targetCell.dataset.col);

        this.currentSelectedGridRows = hoverRow + 1;
        this.currentSelectedGridCols = hoverCol + 1;
        this.tableGridLabel.textContent = `${this.currentSelectedGridRows} x ${this.currentSelectedGridCols}`;

        this.tableGridCells.forEach(cell => {
            const r = parseInt(cell.dataset.row);
            const c = parseInt(cell.dataset.col);
            if (r <= hoverRow && c <= hoverCol) {
                cell.classList.add('highlighted');
            } else {
                cell.classList.remove('highlighted');
            }
        });
    }

    _handleTableGridCellClick(event) {
        const targetCell = event.target.closest('.md-table-grid-cell');
        if (!targetCell) return;

        const rows = this.currentSelectedGridRows;
        const cols = this.currentSelectedGridCols;

        this._performInsertTable(rows, cols); // This will use the saved range
        this._hideTableGridSelector(); // Hide after selection
    }

    _onAreaInput(e, getContentFn, updateToolbarFn) {
        if (!this.isUpdatingFromUndoRedo && e.inputType !== 'historyUndo' && e.inputType !== 'historyRedo') {
            this._pushToUndoStack(getContentFn());
        }
        if (this.options.onUpdate) this.options.onUpdate(this.getValue());
        updateToolbarFn();
    }

    _onAreaKeyDown(e, areaElement, updateToolbarFn) {
        this._handleKeyDownShared(e, areaElement);
        setTimeout(() => updateToolbarFn(), 0);
    }

    _finalizeUpdate(contentForUndo) {
        // If contentForUndo is not provided, derive it from the current mode
        if (contentForUndo === undefined) {
            if (this.currentMode === 'wysiwyg') {
                contentForUndo = this.editableArea.innerHTML;
            } else {
                contentForUndo = this.markdownArea.value;
            }
        }

        if (contentForUndo !== undefined && !this.isUpdatingFromUndoRedo) {
            this._pushToUndoStack(contentForUndo);
        }
        if (this.options.onUpdate) this.options.onUpdate(this.getValue());
        this._updateToolbarActiveStates();
    }

    _createToolbar() {
        this.toolbar = document.createElement('div');
        this.toolbar.classList.add('md-toolbar');
        this.options.buttons.forEach(buttonConfig => {
            const button = document.createElement('button');
            button.type = 'button';
            button.classList.add('md-toolbar-button', `md-toolbar-button-${buttonConfig.id}`);
            button.innerHTML = buttonConfig.label;
            button.title = buttonConfig.title;
            button.dataset.buttonId = buttonConfig.id; // Store ID for easier access
            const listener = () => this._handleToolbarClick(buttonConfig, button);
            button.addEventListener('click', listener);
            this.toolbarButtonListeners.push({ button, listener }); // Keep track for destroy
            this.toolbar.appendChild(button);
        });
        this.editorWrapper.appendChild(this.toolbar);
    }

    _createEditorContentArea() {
        this.contentAreaContainer = document.createElement('div');
        this.contentAreaContainer.classList.add('md-editor-content-area');

        this.editableArea = document.createElement('div');
        this.editableArea.classList.add('md-editable-area');
        this.editableArea.setAttribute('contenteditable', 'true');
        this.editableArea.setAttribute('spellcheck', 'false'); // Optional: disable browser spellcheck
        this.contentAreaContainer.appendChild(this.editableArea);

        // Structure for Markdown editor with line numbers
        this.markdownEditorContainer = document.createElement('div');
        this.markdownEditorContainer.classList.add('md-markdown-editor-container');
        this.markdownEditorContainer.style.display = 'none'; // Initially hidden

        this.markdownLineNumbersDiv = document.createElement('div');
        this.markdownLineNumbersDiv.classList.add('md-markdown-line-numbers');

        this.markdownTextareaWrapper = document.createElement('div');
        this.markdownTextareaWrapper.classList.add('md-markdown-textarea-wrapper');

        this.markdownArea = document.createElement('textarea');
        this.markdownArea.classList.add('md-markdown-area');
        this.markdownArea.setAttribute('spellcheck', 'false'); // Optional

        this.markdownTextareaWrapper.appendChild(this.markdownArea);
        this.markdownEditorContainer.appendChild(this.markdownLineNumbersDiv);
        this.markdownEditorContainer.appendChild(this.markdownTextareaWrapper);

        this.contentAreaContainer.appendChild(this.markdownEditorContainer);
        this.editorWrapper.appendChild(this.contentAreaContainer);
    }

    _createTabs() {
        this.tabsContainer = document.createElement('div');
        this.tabsContainer.classList.add('md-tabs');
        this.wysiwygTabButton = document.createElement('button');
        this.wysiwygTabButton.classList.add('md-tab-button');
        this.wysiwygTabButton.textContent = 'WYSIWYG';
        this.wysiwygTabButton.addEventListener('click', this._boundListeners.onWysiwygTabClick);
        this.tabsContainer.appendChild(this.wysiwygTabButton);
        this.markdownTabButton = document.createElement('button');
        this.markdownTabButton.classList.add('md-tab-button');
        this.markdownTabButton.textContent = 'Markdown';
        this.markdownTabButton.addEventListener('click', this._boundListeners.onMarkdownTabClick);
        this.tabsContainer.appendChild(this.markdownTabButton);
        this.editorWrapper.appendChild(this.tabsContainer);
    }

    switchToMode(mode, isInitialSetup = false) {
        if (this.currentMode === mode && !isInitialSetup) return;
        this._hideTableGridSelector();
        this._hideContextualTableToolbar();

        const previousContent = this.currentMode === 'wysiwyg' ? this.editableArea.innerHTML : this.markdownArea.value;
        this.currentMode = mode;

        if (mode === 'wysiwyg') {
            if (!isInitialSetup) {
                this.editableArea.innerHTML = this._markdownToHtml(this.markdownArea.value);
            }
            this.editableArea.style.display = 'block';
            this.markdownEditorContainer.style.display = 'none';
            this.wysiwygTabButton.classList.add('active');
            this.markdownTabButton.classList.remove('active');
            this.editableArea.focus();
        } else { // markdown mode
            if (!isInitialSetup) {
                this.markdownArea.value = this._htmlToMarkdown(this.editableArea);
            }
            this.editableArea.style.display = 'none';
            this.markdownEditorContainer.style.display = 'flex'; // Use flex for line numbers
            this.markdownTabButton.classList.add('active');
            this.wysiwygTabButton.classList.remove('active');
            this.markdownArea.focus();
            this._updateMarkdownLineNumbers();
        }

        // Update undo stack carefully during mode switch
        const currentEditorContent = (mode === 'wysiwyg') ? this.editableArea.innerHTML : this.markdownArea.value;
        if (!isInitialSetup && previousContent !== currentEditorContent) {
            // Content changed during conversion, reset undo stack with new content
            this.undoStack = [currentEditorContent];
            this.redoStack = [];
        } else if (isInitialSetup || this.undoStack.length === 0) {
            // Initial setup or empty stack, initialize with current content
            this.undoStack = [currentEditorContent];
            this.redoStack = [];
        }
        // If content is the same, undo stack should ideally be preserved,
        // but simple reset is safer for now to avoid complex state tracking.

        this._updateToolbarActiveStates();
    }

    _updateMarkdownLineNumbers() {
        if (!this.markdownArea || !this.markdownLineNumbersDiv) return;

        const lines = this.markdownArea.value.split('\n');
        let lineCount = lines.length;
        // if (lineCount === 0) lineCount = 1; // Always show at least one line number

        let lineNumbersHtml = '';
        for (let i = 1; i <= lineCount; i++) {
            lineNumbersHtml += `<div>${i}</div>`;
        }
        this.markdownLineNumbersDiv.innerHTML = lineNumbersHtml || '<div>1</div>'; // Ensure at least '1' if empty
        this._syncScrollMarkdown(); // Sync scroll after updating line numbers
    }

    _syncScrollMarkdown() {
        if (this.markdownLineNumbersDiv && this.markdownArea) {
            this.markdownLineNumbersDiv.scrollTop = this.markdownArea.scrollTop;
        }
    }


    _handleSelectionChange() {
        this._updateToolbarActiveStates();
    }

    _clearToolbarActiveStates() {
        this.options.buttons.forEach(btnConfig => {
            const buttonEl = this.toolbar.querySelector(`.md-toolbar-button-${btnConfig.id}`);
            if (buttonEl) buttonEl.classList.remove('active');
        });
    }

    _updateToolbarActiveStates() {
        this._clearToolbarActiveStates(); // Clear all first
        if (this.currentMode === 'wysiwyg' && document.activeElement === this.editableArea) {
            this._updateWysiwygToolbarActiveStates();
        } else if (this.currentMode === 'markdown' && document.activeElement === this.markdownArea) {
            this._updateMarkdownToolbarActiveStates();
        }
    }

    _updateWysiwygToolbarActiveStates() {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;

        const indentButton = this.toolbar.querySelector(`.md-toolbar-button-indent`);
        const outdentButton = this.toolbar.querySelector(`.md-toolbar-button-outdent`);

        // Default to disabled, enable if applicable
        if (indentButton) indentButton.disabled = true;
        if (outdentButton) outdentButton.disabled = true;

        this.options.buttons.forEach(btnConfig => {
            const buttonEl = this.toolbar.querySelector(`.md-toolbar-button-${btnConfig.id}`);
            if (!buttonEl || btnConfig.id === 'table' || btnConfig.id === 'image') return;

            let isActive = false;

            if (btnConfig.execCommand) {
                if (btnConfig.execCommand === 'formatBlock' && btnConfig.value) {
                    // Check parent node for block elements like H1, H2, BLOCKQUOTE
                    let blockElement = selection.getRangeAt(0).commonAncestorContainer;
                    if (blockElement.nodeType === Node.TEXT_NODE) {
                        blockElement = blockElement.parentNode;
                    }
                    while (blockElement && blockElement !== this.editableArea) {
                        if (blockElement.nodeName === btnConfig.value.toUpperCase()) {
                            isActive = true;
                            break;
                        }
                        blockElement = blockElement.parentNode;
                    }
                } else {
                    isActive = document.queryCommandState(btnConfig.execCommand);
                }
            } else if (btnConfig.id === 'link') {
                let parentNode = selection.anchorNode;
                if (parentNode && parentNode.nodeType === Node.TEXT_NODE) {
                    parentNode = parentNode.parentNode;
                }
                while (parentNode && parentNode !== this.editableArea) {
                    if (parentNode.nodeName === 'A') {
                        isActive = true;
                        break;
                    }
                    parentNode = parentNode.parentNode;
                }
            } else if (btnConfig.id === 'inlinecode') {
                // Check if selection is inside a <code> not in <pre>
                let el = selection.getRangeAt(0).commonAncestorContainer;
                if (el.nodeType === Node.TEXT_NODE) el = el.parentElement;
                while (el && el !== this.editableArea) {
                    if (el.nodeName === 'CODE' && (!el.parentElement || el.parentElement.nodeName !== 'PRE')) {
                        isActive = true; break;
                    }
                    el = el.parentElement;
                }
            } else if (btnConfig.id === 'codeblock') {
                // Check if selection is inside a <pre>
                let el = selection.getRangeAt(0).commonAncestorContainer;
                if (el.nodeType === Node.TEXT_NODE) el = el.parentElement;
                while (el && el !== this.editableArea) {
                    if (el.nodeName === 'PRE') {
                        isActive = true; break;
                    }
                    el = el.parentElement;
                }
            } else if (btnConfig.id === 'indent' || btnConfig.id === 'outdent') {
                // Enable indent/outdent if selection is in a list item
                const commonAncestor = selection.getRangeAt(0).commonAncestorContainer;
                const listItem = this._findParentElement(commonAncestor, 'LI');

                if (listItem) {
                    if (btnConfig.id === 'indent' && indentButton) {
                        // indent is usually always enabled if in a list context
                        indentButton.disabled = false;
                    }
                    if (btnConfig.id === 'outdent' && outdentButton) {
                        // Check if outdent command itself is enabled by the browser
                        // (e.g., cannot outdent a top-level list item further)
                        if (document.queryCommandEnabled('outdent')) {
                            outdentButton.disabled = false;
                        } else {
                            outdentButton.disabled = true;
                        }
                    }
                }
                isActive = false; // These buttons don't have an "active" state, only enabled/disabled
            }


            if (isActive) {
                buttonEl.classList.add('active');
            } else {
                buttonEl.classList.remove('active');
            }
        });
    }

    _updateMarkdownToolbarActiveStates() {
        if (!this.markdownArea || document.activeElement !== this.markdownArea) return;
        const textarea = this.markdownArea;
        const textValue = textarea.value;
        const selStart = textarea.selectionStart;
        const selEnd = textarea.selectionEnd;

        const indentButton = this.toolbar.querySelector(`.md-toolbar-button-indent`);
        const outdentButton = this.toolbar.querySelector(`.md-toolbar-button-outdent`);

        if (indentButton) indentButton.disabled = true;
        if (outdentButton) outdentButton.disabled = true;

        this.options.buttons.forEach(btnConfig => {
            if (btnConfig.id === 'table' || btnConfig.id === 'image') return;

            const buttonEl = this.toolbar.querySelector(`.md-toolbar-button-${btnConfig.id}`);
            if (!buttonEl) return;

            let isActive = false;
            let actualFormatStart = -1;
            let actualFormatEnd = -1;

            if (btnConfig.id === 'indent') {
                const lineStart = textValue.lastIndexOf('\n', selStart - 1) + 1;
                const currentLineFull = textValue.substring(lineStart, textValue.indexOf('\n', lineStart) === -1 ? textValue.length : textValue.indexOf('\n', lineStart));
                if (selStart !== selEnd || currentLineFull.trim().length > 0) { // Can indent if selection or content on line
                    if (indentButton) indentButton.disabled = false;
                }
                isActive = false; // Not an "active" state button
            } else if (btnConfig.id === 'outdent') {
                // Check if any selected line can be outdented
                const selectionStartLineNum = textValue.substring(0, selStart).split('\n').length - 1;
                const selectionEndLineNum = textValue.substring(0, selEnd).split('\n').length - 1;
                const allLines = textValue.split('\n');
                let canOutdentThisSelection = false;
                for (let i = selectionStartLineNum; i <= selectionEndLineNum; i++) {
                    if (allLines[i] && allLines[i].match(/^(\s\s+|\t)/)) { // Matches 2+ spaces or a tab
                        canOutdentThisSelection = true;
                        break;
                    }
                }
                if (canOutdentThisSelection) {
                    if (outdentButton) outdentButton.disabled = false;
                }
                isActive = false; // Not an "active" state button
            }
            else if (btnConfig.type === 'inline' && btnConfig.mdPrefix && btnConfig.mdSuffix) {
                const prefix = btnConfig.mdPrefix;
                const suffix = btnConfig.mdSuffix;
                const prefixLen = prefix.length;
                const suffixLen = suffix.length;

                // Complex logic to find if cursor is within such formatting
                // This is a simplified check: looks immediately around selection
                // A more robust check would parse backward/forward more carefully
                let foundPrefixPos = -1;
                // Search backwards from selection start for prefix
                let scanStart = selStart - prefixLen;
                if (selStart === selEnd) scanStart = selStart; // If no selection, look right at cursor

                for (let i = scanStart; i >= 0; i--) {
                    if (textValue.substring(i, i + prefixLen) === prefix) {
                        // Avoid matching prefix of a nested or different format, e.g. '***text***' for '*'
                        // This is a common simplification point, true context parsing is hard.
                        let tempSuffixSearch = textValue.indexOf(suffix, i + prefixLen);
                        // Is this prefix part of an already closed pair *before* our selection?
                        if (
                            tempSuffixSearch !== -1 && // suffix exists
                            tempSuffixSearch < selStart - prefixLen && // suffix ends before our prefix search point
                            tempSuffixSearch + suffixLen < selStart // suffix fully before our current selection
                        ) {
                            // This prefix belongs to a pair that closes before our area of interest.
                            // However, a *new* prefix might start after this old pair.
                            // Example: **bold1** **bold2** (cursor in bold2)
                            // We need to ensure we don't incorrectly associate the first ** with bold2.
                            // A quick check: is there another prefix between the found suffix and our selection?
                            let nextPotentialPrefix = textValue.indexOf(prefix, tempSuffixSearch + suffixLen);
                            if (nextPotentialPrefix !== -1 && nextPotentialPrefix < selStart - prefixLen) {
                                // Yes, another prefix exists. Our current `i` is too early.
                                // Jump `i` to just after this interfering prefix to continue search.
                                i = nextPotentialPrefix + 1; // +1 because loop will i--
                                continue;
                            } else {
                                // No other prefix, or it's after our selection. So, this prefix `i` is not relevant.
                                break; // Stop backward search for this path.
                            }
                        } else {
                            // Suffix is not before, or doesn't exist. This prefix at `i` *could* be the one.
                            foundPrefixPos = i;
                            break;
                        }
                    }
                    if (textValue[i - 1] === '\n' && i < selStart - prefixLen) break; // Don't cross line boundaries for inline
                }


                if (foundPrefixPos !== -1) {
                    let foundSuffixPos = -1;
                    // Search forward from selection end for suffix
                    let suffixSearchStart = (selStart === selEnd ? selStart : selEnd); // If no selection, start search from cursor

                    for (let i = suffixSearchStart; i <= textValue.length - suffixLen; i++) {
                        if (textValue.substring(i, i + suffixLen) === suffix) {
                            // Ensure this suffix is related to the foundPrefixPos
                            // and doesn't cross an intervening prefix of the same type that isn't closed.
                            if (
                                foundPrefixPos < selStart && // prefix must be before current selection start
                                (foundPrefixPos + prefixLen <= selStart || selStart === selEnd) && // prefix must end before or at selection start (or if no selection)
                                i >= (selStart === selEnd ? selEnd - suffixLen : selEnd) && // suffix must start at or after selection end
                                (selEnd <= i + (selStart === selEnd ? 0 : suffixLen) || selStart === selEnd) // selection end must be before or at suffix end (or if no selection)
                            ) {
                                // Check for unclosed prefix between foundPrefixPos and this suffix
                                let interveningPrefix = textValue
                                    .substring(foundPrefixPos + prefixLen, i)
                                    .lastIndexOf(prefix); // last one is closest to suffix

                                if (interveningPrefix !== -1) {
                                    interveningPrefix += (foundPrefixPos + prefixLen); // make it absolute index
                                    // If this intervening prefix is not itself closed before `i`
                                    let interveningSuffix = textValue.indexOf(suffix, interveningPrefix + prefixLen);
                                    if (interveningSuffix === -1 || interveningSuffix >= i) {
                                        // Intervening prefix is unclosed or closes after/at our current suffix candidate `i`.
                                        // So, our suffix at `i` likely belongs to this intervening prefix, not `foundPrefixPos`.
                                        continue; // Look for a later suffix
                                    }
                                }
                                foundSuffixPos = i;
                                break;
                            }
                        }
                        if (textValue[i] === '\n' && i > selEnd && textValue.length - suffixLen > i) break; // Don't cross line boundaries
                    }

                    if (foundPrefixPos !== -1 && foundSuffixPos !== -1) {
                        isActive = true;
                        actualFormatStart = foundPrefixPos;
                        actualFormatEnd = foundSuffixPos + suffixLen;
                    }
                }
                // Special handling for italic (`*`) to distinguish from bold (`**`) or bold-italic (`***`)
                if (btnConfig.id === 'italic' && isActive) {
                    // If it's actually bold (`**...**`), italic should not be active.
                    if (textValue.substring(actualFormatStart, actualFormatStart + 2) === '**' &&
                        textValue.substring(actualFormatEnd - 2, actualFormatEnd) === '**') {
                        isActive = false;
                    } else {
                        // If it's `***...***`, italic can be considered active.
                        // But if it's `*notbold*` vs `**bold**`, need to be careful.
                        // The logic aims for `*text*` to activate italic.
                        // `**text**` to activate bold.
                        // `***text***` to activate bold AND italic.

                        // If prefix is `*` but char before is also `*` (making `**` or `***`)
                        // and char after suffix is also `*`
                        const charBeforeActualPrefix = (actualFormatStart > 0) ? textValue.charAt(actualFormatStart - 1) : null;
                        const charAfterActualSuffix = (actualFormatEnd < textValue.length) ? textValue.charAt(actualFormatEnd) : null;

                        if (charBeforeActualPrefix === '*' && charAfterActualSuffix === '*') {
                            // Potentially `***em***` or `**normal *em* normal**`
                            // If `***foo***`, then italic is active. This is actualFormatStart = 1, actualFormatEnd = text.length -1 for `*foo*` part
                            //  `*` `*` `*` F O O `*` `*` `*`
                            //  0   1   2   3 4 5   6   7   8
                            // actualFormatStart for italic *foo* is index 2, actualFormatEnd is index 6.
                            // textValue[actualFormatStart-1] is '*', textValue[actualFormatEnd] is '*'
                            // This means it could be part of `***`
                            // If it is `***text***`, `actualFormatStart` (for italic) should not be 0 and `actualFormatEnd` not `text.length` if we think of `*(*text*)*`
                            // This specific check tries to deactivate italic if it's *only* part of bold like `**em**bedded`
                            const isThirdStarBefore = (actualFormatStart - 2 >= 0) && (textValue.charAt(actualFormatStart - 2) === '*');
                            const isThirdStarAfter = (actualFormatEnd + 1 < textValue.length) && (textValue.charAt(actualFormatEnd + 1) === '*');

                            if (isThirdStarBefore && isThirdStarAfter) { // Surrounded by `***`, so italic is valid
                                isActive = true;
                            } else { // Might be `**text**` where `*text*` was found
                                isActive = false;
                            }
                        } else {
                            // Check if the content *inside* the found italic markers is itself bold
                            // e.g. `* **bold italic** *` -> italic is active
                            // but if it's `*text*` -> italic active
                            // if it's `**text**` and we are checking for italic, it shouldn't be active.
                            // The first check (textValue.substring(actualFormatStart, actualFormatStart + 2) === '**') handles this.

                            // This case: `*foo*` or `*foo` or `foo*`
                            // Need to ensure the character *inside* the `*` markers is not another `*` if it would form `**`
                            const charAfterActualPrefix = (actualFormatStart + prefixLen < actualFormatEnd) ? textValue.charAt(actualFormatStart + prefixLen) : null;
                            const charBeforeActualSuffix = (actualFormatEnd - suffixLen - 1 >= actualFormatStart + prefixLen) ? textValue.charAt(actualFormatEnd - suffixLen - 1) : null;

                            if (charAfterActualPrefix === '*' && charBeforeActualSuffix === '*') {
                                // e.g. `* *text* *` where `*text*` is found. This is not simple italic.
                                isActive = false;
                            }
                        }
                    }
                }

            }
            else if ((btnConfig.type === 'block' || btnConfig.type === 'block-list') && btnConfig.mdPrefix) {
                // Determine current line based on selection start
                let lineStart = textValue.lastIndexOf('\n', selStart - 1) + 1;
                // Adjust if cursor is at the very beginning of the text area
                if (selStart === 0 && lineStart > 0 && textValue.charAt(0) !== '\n') {
                    lineStart = 0;
                }
                const currentLineEnd = textValue.indexOf('\n', lineStart);
                const currentLine = textValue.substring(
                    lineStart,
                    currentLineEnd === -1 ? textValue.length : currentLineEnd
                );
                // Check if the content of the line (after trimming spaces) starts with the prefix
                isActive = currentLine.trimStart().startsWith(btnConfig.mdPrefix);
            }
            else if (btnConfig.type === 'block-wrap' && btnConfig.mdPrefix && btnConfig.mdSuffix) {
                const p = btnConfig.mdPrefix;
                const s = btnConfig.mdSuffix;
                // Check if selection is exactly wrapped
                if (selStart >= p.length && textValue.substring(selStart - p.length, selStart) === p &&
                    selEnd <= textValue.length - s.length && textValue.substring(selEnd, selEnd + s.length) === s) {
                    isActive = true;
                } else {
                    // Check if selection is *within* a larger wrapped block
                    // Search backward for prefix, making sure it's before or at selection start
                    let potentialPrefixStart = textValue.lastIndexOf(p, selStart - (selStart === selEnd ? 0 : p.length)); // if no selection, can be right at cursor

                    if (potentialPrefixStart !== -1) {
                        // Search forward for suffix, making sure it's after or at selection end
                        let potentialSuffixStart = textValue.indexOf(s, Math.max(potentialPrefixStart + p.length, selEnd - (selStart === selEnd ? s.length : 0)));

                        if (potentialSuffixStart !== -1 &&
                            potentialPrefixStart < selStart && // Prefix must start before selection
                            selEnd <= potentialSuffixStart + (selStart === selEnd ? s.length : 0) // Selection must end within or at end of suffix
                        ) {
                            isActive = true;
                        }
                    }
                }
            }


            if (buttonEl && btnConfig.id !== 'indent' && btnConfig.id !== 'outdent') { // Indent/Outdent are not "active" state
                if (isActive) {
                    buttonEl.classList.add('active');
                } else {
                    buttonEl.classList.remove('active');
                }
            }
        });
    }

    _attachEventListeners() {
        // WYSIWYG Area Listeners
        this._boundListeners.onEditableAreaInput = (e) => this._onAreaInput(e, () => this.editableArea.innerHTML, this._boundListeners.updateWysiwygToolbar);

        // Markdown Area Listeners
        this._boundListeners.onMarkdownAreaInput = (e) => {
            this._onAreaInput(e, () => this.markdownArea.value, this._boundListeners.updateMarkdownToolbar);
            this._updateMarkdownLineNumbers(); // Update line numbers on input
        };

        // Keydown listeners (shared logic handled by _onAreaKeyDown)
        this._boundListeners.onEditableAreaKeyDown = (e) => this._onAreaKeyDown(e, this.editableArea, this._boundListeners.updateWysiwygToolbar);
        this._boundListeners.onMarkdownAreaKeyDown = (e) => this._onAreaKeyDown(e, this.markdownArea, this._boundListeners.updateMarkdownToolbar);


        this.editableArea.addEventListener('input', this._boundListeners.onEditableAreaInput);
        this.editableArea.addEventListener('keydown', this._boundListeners.onEditableAreaKeyDown);
        this.editableArea.addEventListener('keyup', this._boundListeners.updateWysiwygToolbar); // Update on keyup for selection changes
        this.editableArea.addEventListener('click', this._boundListeners.updateWysiwygToolbar); // Update on click
        this.editableArea.addEventListener('click', this._boundListeners.onEditableAreaClickForTable);
        this.editableArea.addEventListener('focus', this._boundListeners.updateWysiwygToolbar);


        this.markdownArea.addEventListener('input', this._boundListeners.onMarkdownAreaInput);
        this.markdownArea.addEventListener('keydown', this._boundListeners.onMarkdownAreaKeyDown);
        this.markdownArea.addEventListener('keyup', this._boundListeners.updateMarkdownToolbar);
        this.markdownArea.addEventListener('click', this._boundListeners.updateMarkdownToolbar);
        this.markdownArea.addEventListener('focus', this._boundListeners.updateMarkdownToolbar);
        this.markdownArea.addEventListener('scroll', this._boundListeners.syncScrollMarkdown); // Sync line numbers scroll
    }

    _handleKeyDownShared(e, targetArea) {
        if (e.key === 'Tab') {
            e.preventDefault();
            if (targetArea === this.editableArea) {
                const sel = window.getSelection();
                if (sel && sel.rangeCount > 0) {
                    const listItem = this._findParentElement(sel.getRangeAt(0).commonAncestorContainer, 'LI');
                    const tableCell = this._findParentElement(sel.getRangeAt(0).commonAncestorContainer, ['TD', 'TH']);
                    if (listItem) {
                        document.execCommand(e.shiftKey ? 'outdent' : 'indent');
                    } else if (tableCell) {
                        const table = this._findParentElement(tableCell, 'TABLE');
                        if (table) {
                            const cells = Array.from(table.querySelectorAll('th, td'));
                            const currentIndex = cells.indexOf(tableCell);
                            let nextIndex = currentIndex + (e.shiftKey ? -1 : 1);

                            if (nextIndex >= 0 && nextIndex < cells.length) {
                                const nextCell = cells[nextIndex];
                                this._focusCell(nextCell);
                                // Update currentTableSelectionInfo for contextual toolbar
                                const row = this._findParentElement(nextCell, 'TR');
                                this.currentTableSelectionInfo = { cell: nextCell, row: row, table: table, cellIndex: nextCell.cellIndex, rowIndex: row.rowIndex };
                                this._showContextualTableToolbar(nextCell);

                            } else if (!e.shiftKey && nextIndex >= cells.length) { // Tabbing out of the last cell
                                // Try to focus the next focusable element or a paragraph after the table
                                let nextFocusable = table.nextElementSibling;
                                while (nextFocusable && (nextFocusable.nodeName === "#text" || !nextFocusable.hasAttribute('tabindex') && nextFocusable.nodeName !== "P")) {
                                    nextFocusable = nextFocusable.nextElementSibling;
                                }
                                if (nextFocusable && nextFocusable.nodeName === "P" && nextFocusable.firstChild) {
                                    // If it's a paragraph, set cursor at its beginning
                                    const range = document.createRange();
                                    range.setStart(nextFocusable.firstChild, 0);
                                    range.collapse(true);
                                    sel.removeAllRanges();
                                    sel.addRange(range);
                                } else if (nextFocusable) {
                                    nextFocusable.focus(); // Focus other focusable elements
                                }
                                this._hideContextualTableToolbar(); // Hide toolbar when tabbing out
                            }
                            // Tabbing out backward (Shift+Tab from first cell) is usually handled by browser.
                        }
                    } else { // Not in list or table, insert spaces for tab
                        document.execCommand('insertText', false, '    ');
                    }
                } else { // No selection, just insert spaces
                    document.execCommand('insertText', false, '    ');
                }
            } else { // Markdown area
                const start = targetArea.selectionStart;
                const text = targetArea.value;

                // Check if cursor is on a line that looks like a list item
                const firstLineStart = text.lastIndexOf('\n', start - 1) + 1;
                const firstLineEnd = text.indexOf('\n', firstLineStart);
                const firstLine = text.substring(firstLineStart, firstLineEnd === -1 ? text.length : firstLineEnd);

                let handledByListLogic = false;
                if (firstLine.trim().match(/^(\*|-|\+|\d+\.)\s+.*/)) {
                    if (e.shiftKey) {
                        this._applyMarkdownListOutdentInternal();
                        handledByListLogic = true;
                    } else {
                        this._applyMarkdownListIndentInternal();
                        handledByListLogic = true;
                    }
                }

                if (!handledByListLogic) { // Not a list item or Shift+Tab on non-indented list item
                    document.execCommand('insertText', false, '    '); // Standard tab: insert 4 spaces
                }
            }
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
            e.preventDefault(); this._undo();
        } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key.toLowerCase() === 'z'))) {
            e.preventDefault(); this._redo();
        }
    }

    _findParentElement(node, tagNameOrNames) {
        if (!node) return null;
        const tagNames = Array.isArray(tagNameOrNames) ? tagNameOrNames.map(n => n.toUpperCase()) : [tagNameOrNames.toUpperCase()];
        let currentNode = node;
        // Traverse up to the editor area, document body, or document element, but not beyond.
        while (currentNode && currentNode !== this.editableArea && currentNode !== this.markdownArea && currentNode !== document.body && currentNode !== document.documentElement) {
            if (tagNames.includes(currentNode.nodeName)) return currentNode;
            currentNode = currentNode.parentNode;
        }
        return null;
    }

    _pushToUndoStack(content) {
        const stack = this.undoStack;
        // Avoid pushing identical consecutive states
        if (stack.length > 0 && stack[stack.length - 1] === content) return;
        stack.push(content);
        this.redoStack = []; // Clear redo stack on new action
        if (stack.length > 50) stack.shift(); // Limit undo stack size
    }

    _performUndoRedo(sourceStack, targetStack, isUndoOperation) {
        this.isUpdatingFromUndoRedo = true; // Flag to prevent input handlers from pushing to undo stack

        const canProceed = isUndoOperation ? sourceStack.length > 1 : sourceStack.length > 0;
        // For undo: need at least 2 states (current and previous)
        // For redo: need at least 1 state (the one to redo)

        if (canProceed) {
            const stateToMove = sourceStack.pop(); // State being moved from source to target
            targetStack.push(stateToMove);

            // Content to restore is the *new* top of the sourceStack for undo,
            // or the stateToMove itself for redo.
            const contentToRestore = isUndoOperation ? sourceStack[sourceStack.length - 1] : stateToMove;

            if (this.currentMode === 'wysiwyg') {
                this.editableArea.innerHTML = contentToRestore;
            } else {
                this.markdownArea.value = contentToRestore;
                this._updateMarkdownLineNumbers(); // Important for Markdown mode
            }
            this._moveCursorToEnd(); // Move cursor to end after undo/redo for predictability
            if (this.options.onUpdate) this.options.onUpdate(this.getValue());
            this._updateToolbarActiveStates(); // Update toolbar based on new state
        }
        this.isUpdatingFromUndoRedo = false; // Reset flag
    }

    _undo() {
        this._performUndoRedo(this.undoStack, this.redoStack, true);
    }

    _redo() {
        this._performUndoRedo(this.redoStack, this.undoStack, false);
    }

    _moveCursorToEnd() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus(); // Ensure focus
            const range = document.createRange();
            const sel = window.getSelection();
            if (this.editableArea.childNodes.length > 0) {
                const lastChild = this.editableArea.lastChild;
                if (lastChild.nodeType === Node.TEXT_NODE) {
                    range.setStart(lastChild, lastChild.length);
                } else {
                    // For element nodes, select contents and collapse to end,
                    // or try to place cursor after the element.
                    // A common strategy is to place it at the end of its content.
                    range.selectNodeContents(lastChild);
                }
                range.collapse(false); // Collapse to the end of the selection
            } else { // Editable area is empty
                range.setStart(this.editableArea, 0);
                range.collapse(true);
            }
            sel.removeAllRanges();
            sel.addRange(range);
        } else { // Markdown mode
            this.markdownArea.focus(); // Ensure focus
            this.markdownArea.setSelectionRange(this.markdownArea.value.length, this.markdownArea.value.length);
        }
    }

    _handleToolbarClick(buttonConfig, buttonElement) {
        if (buttonConfig.id === 'table' || buttonConfig.id === 'image') {
            if (typeof this[buttonConfig.action] === 'function') {
                this[buttonConfig.action](buttonElement);
            }
            return;
        }

        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            if (buttonConfig.action && typeof this[buttonConfig.action] === 'function') {
                this[buttonConfig.action]();
            } else if (buttonConfig.execCommand) {
                document.execCommand(buttonConfig.execCommand, false, buttonConfig.value || null);
                this._finalizeUpdate(this.editableArea.innerHTML);
            }
        } else { // Markdown mode
            this.markdownArea.focus();
            if ((buttonConfig.type === 'block-list')) { // For UL and OL
                this._toggleOrConvertMarkdownList(buttonConfig);
            } else if (buttonConfig.action && typeof this[buttonConfig.action] === 'function') {
                this[buttonConfig.action](); // For indent, outdent, link etc.
            } else {
                // For bold, italic, headings, blockquote, code etc.
                this._applyMarkdownFormatting(buttonConfig);
            }
        }
        this._updateToolbarActiveStates(); // Always update toolbar after an action
    }

    _toggleOrConvertMarkdownList(buttonConfig) {
        const textarea = this.markdownArea;
        const text = textarea.value;
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        const selectedTextOriginal = text.substring(start, end);

        let lineStartIndex = text.lastIndexOf('\n', start - 1) + 1;
        if (start === 0 && text.charAt(0) !== '\n') lineStartIndex = 0;

        let lineEndIndexSearch = end;
        if (end > 0 && text[end - 1] === '\n' && start !== end && end > lineStartIndex) {
            lineEndIndexSearch = end - 1;
        }
        let lineEndIndex = text.indexOf('\n', lineEndIndexSearch);
        if (lineEndIndex === -1 || lineEndIndex < lineStartIndex) lineEndIndex = text.length;
        if (lineEndIndex < lineStartIndex && start === end && start === text.length) lineEndIndex = text.length;

        const affectedText = text.substring(lineStartIndex, lineEndIndex);
        const lines = affectedText.split('\n');

        const newButtonPrefixPattern = buttonConfig.mdPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape for regex
        const isNewTypeOl = buttonConfig.id === 'ol';
        let olCounter = 1;

        let charDiff = 0;
        let firstLineCharDiff = 0;
        delete this.pendingPlaceholderSelection; // Clear any previous pending selection

        const newLines = lines.map((line, index) => {
            const leadingSpaces = line.match(/^(\s*)/)[0];
            const contentAfterSpaces = line.substring(leadingSpaces.length);

            const ulMarkerRegex = /^(?:[-*+]\s+)/;
            const olMarkerRegex = /^(?:\d+\.\s+)/;

            let currentMarkerMatch = contentAfterSpaces.match(ulMarkerRegex) || contentAfterSpaces.match(olMarkerRegex);
            let textAfterMarker = contentAfterSpaces;
            let originalMarkerLength = 0;
            let currentMarkerIsOl = false;
            let currentMarkerIsUl = false;

            if (currentMarkerMatch) {
                textAfterMarker = contentAfterSpaces.substring(currentMarkerMatch[0].length);
                originalMarkerLength = currentMarkerMatch[0].length;
                if (contentAfterSpaces.match(olMarkerRegex)) currentMarkerIsOl = true;
                if (contentAfterSpaces.match(ulMarkerRegex)) currentMarkerIsUl = true;
            }

            let newLine = line;
            const newMarkerCurrentLine = isNewTypeOl ? `${olCounter}. ` : buttonConfig.mdPrefix;


            if ((isNewTypeOl && currentMarkerIsOl) || (!isNewTypeOl && currentMarkerIsUl)) { // Current line IS of the target type - toggle OFF
                newLine = leadingSpaces + textAfterMarker;
                const diff = -originalMarkerLength;
                charDiff += diff;
                if (index === 0) firstLineCharDiff = diff;
            } else if (currentMarkerMatch) { // Current line is a list item, but DIFFERENT type - CONVERT
                newLine = leadingSpaces + newMarkerCurrentLine + textAfterMarker;
                const diff = newMarkerCurrentLine.length - originalMarkerLength;
                charDiff += diff;
                if (index === 0) firstLineCharDiff = diff;
                if (isNewTypeOl) olCounter++;
            } else { // Not a list item - toggle ON
                const contentToUse = (contentAfterSpaces.trim() === "" && lines.length > 1 && (selectedTextOriginal.trim() !== "" || start !== end))
                    ? ""
                    : (contentAfterSpaces.trim() === "" ? "Item de lista" : contentAfterSpaces);

                newLine = leadingSpaces + newMarkerCurrentLine + contentToUse;
                const diff = newMarkerCurrentLine.length + (contentToUse === "Item de lista" && contentAfterSpaces.trim() === "" ? "Item de lista".length - contentAfterSpaces.length : 0);
                charDiff += diff;
                if (index === 0) firstLineCharDiff = diff;

                if (contentAfterSpaces.trim() === "" && contentToUse === "Item de lista" && (selectedTextOriginal.trim() === "")) {
                    this.pendingPlaceholderSelection = {
                        lineIndex: index,
                        startOffset: leadingSpaces.length + newMarkerCurrentLine.length,
                        endOffset: leadingSpaces.length + newMarkerCurrentLine.length + "Item de lista".length
                    };
                }
                if (isNewTypeOl) olCounter++;
            }
            return newLine;
        });

        textarea.value = text.substring(0, lineStartIndex) + newLines.join('\n') + text.substring(lineEndIndex);

        if (this.pendingPlaceholderSelection && this.pendingPlaceholderSelection.lineIndex === 0 && lines.length === 1 && selectedTextOriginal.trim() === "") {
            const placeholderStart = lineStartIndex + this.pendingPlaceholderSelection.startOffset;
            const placeholderEnd = lineStartIndex + this.pendingPlaceholderSelection.endOffset;
            textarea.setSelectionRange(placeholderStart, placeholderEnd);
            delete this.pendingPlaceholderSelection;
        } else {
            const newCursorStart = Math.max(lineStartIndex, start + firstLineCharDiff);
            const newCursorEnd = Math.max(newCursorStart, end + charDiff);
            textarea.setSelectionRange(newCursorStart, newCursorEnd);
        }

        textarea.focus();
        this._finalizeUpdate(textarea.value);
    }


    _insertTableAction(buttonElement) {
        if (this.tableGridSelector.style.display === 'block') {
            this._hideTableGridSelector();
        } else {
            // Focus editor before showing grid to save correct range
            if (this.currentMode === 'wysiwyg') this.editableArea.focus();
            else this.markdownArea.focus();
            this._showTableGridSelector(buttonElement);
        }
    }

    _performInsertTable(rows, cols) {
        if (this.currentMode === 'wysiwyg') {
            this._insertTableWysiwyg(rows, cols);
        } else {
            this._insertTableMarkdown(rows, cols);
        }
    }

    _insertTableWysiwyg(rows, cols) {
        if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
            console.error("Invalid rows or columns for table insertion.");
            return;
        }

        this.editableArea.focus(); // Ensure focus
        let rangeToUse;
        const selection = window.getSelection();

        // Use saved range if valid and within editable area
        if (this.savedRangeInfo instanceof Range && this.editableArea.contains(this.savedRangeInfo.commonAncestorContainer)) {
            rangeToUse = this.savedRangeInfo;
            selection.removeAllRanges(); // Clear current selection
            selection.addRange(rangeToUse); // Restore saved range
        } else if (selection.rangeCount > 0 && this.editableArea.contains(selection.getRangeAt(0).commonAncestorContainer)) {
            // Use current selection if valid
            rangeToUse = selection.getRangeAt(0);
        } else {
            // Fallback: create range at the end of the editable area
            rangeToUse = document.createRange();
            rangeToUse.selectNodeContents(this.editableArea);
            rangeToUse.collapse(false); // to the end
            selection.removeAllRanges();
            selection.addRange(rangeToUse);
        }

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);

        // Create header row if rows >= 1
        if (rows >= 1) {
            const hr = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                const th = document.createElement('th');
                th.innerHTML = `Cabeçalho ${j + 1}`; // Placeholder content
                hr.appendChild(th);
            }
            thead.appendChild(hr);
        }

        // Create body rows (start from 1 because row 0 could be header)
        for (let i = 1; i < rows; i++) {
            const br = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                const td = document.createElement('td');
                td.innerHTML = '&#8203;'; // Placeholder ZWS for empty cells
                br.appendChild(td);
            }
            tbody.appendChild(br);
        }

        rangeToUse.deleteContents(); // Clear selected content before inserting table
        const fragment = document.createDocumentFragment();
        fragment.appendChild(table);

        // Add a paragraph after the table for easier cursor placement
        const pAfter = document.createElement('p');
        pAfter.innerHTML = '&#8203;'; // ZWS
        fragment.appendChild(pAfter);

        rangeToUse.insertNode(fragment);

        // Focus the first cell of the table
        let firstCellToFocus = null;
        if (rows >= 1 && cols >= 1 && thead.firstChild && thead.firstChild.firstChild) {
            firstCellToFocus = thead.firstChild.firstChild; // First header cell
        } else if (tbody.firstChild && tbody.firstChild.firstChild) {
            firstCellToFocus = tbody.firstChild.firstChild; // First body cell if no header
        }

        if (firstCellToFocus) {
            this._focusCell(firstCellToFocus);
            // Update currentTableSelectionInfo for contextual toolbar
            const row = this._findParentElement(firstCellToFocus, 'TR');
            this.currentTableSelectionInfo = { cell: firstCellToFocus, row: row, table: table, cellIndex: firstCellToFocus.cellIndex, rowIndex: row.rowIndex };
            this._showContextualTableToolbar(firstCellToFocus);
        } else {
            // Fallback: place cursor in the paragraph after the table
            rangeToUse.setStart(pAfter, pAfter.childNodes.length > 0 ? 1 : 0); // After ZWS if present
            rangeToUse.collapse(true);
            selection.removeAllRanges();
            selection.addRange(rangeToUse);
        }
        this.savedRangeInfo = null; // Clear saved range after use
        this._finalizeUpdate(this.editableArea.innerHTML);
    }

    _insertTableMarkdown(rows, cols) {
        if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
            console.error("Invalid rows or columns for Markdown table insertion.");
            return;
        }

        const textarea = this.markdownArea;
        let start, end;

        // Use saved range if available (from _showTableGridSelector)
        if (this.savedRangeInfo && typeof this.savedRangeInfo.start === 'number') {
            start = this.savedRangeInfo.start;
            end = this.savedRangeInfo.end;
        } else { // Fallback to current textarea selection
            start = textarea.selectionStart;
            end = textarea.selectionEnd;
        }


        let mdTable = "";
        const headerPlaceholders = [];
        // Header row
        if (rows >= 1) { // Always create a header row for Markdown tables
            mdTable += "|";
            for (let j = 0; j < cols; j++) {
                const placeholder = ` Cabeçalho ${j + 1} `;
                headerPlaceholders.push(placeholder.trim()); // Store for selection later
                mdTable += placeholder + "|";
            }
            mdTable += "\n";
            // Separator row
            mdTable += "|";
            for (let j = 0; j < cols; j++) mdTable += " --- |";
            mdTable += "\n";
        }

        // Body rows (if rows > 1, because first row is header)
        for (let i = 1; i < rows; i++) {
            mdTable += "|";
            for (let j = 0; j < cols; j++) mdTable += " Célula |"; // Placeholder content
            mdTable += "\n";
        }

        const textValue = textarea.value;
        // Ensure table is on a new line, preferably with a blank line before
        let prefixNewline = "";
        if (start > 0 && textValue[start - 1] !== '\n') {
            prefixNewline = "\n\n"; // Needs two newlines if not at start of a line
        } else if (start > 0 && textValue.substring(start - 2, start) !== '\n\n' && textValue[start - 1] === '\n') {
            prefixNewline = "\n"; // Needs one more newline if only one exists
        }

        const textToInsert = prefixNewline + mdTable.trimEnd() + "\n\n"; // Ensure blank line after
        textarea.value = textValue.substring(0, start) + textToInsert + textValue.substring(end);

        // Select the first header placeholder for easy editing
        if (headerPlaceholders.length > 0) {
            const firstPlaceholderText = headerPlaceholders[0];
            // Find the placeholder within the inserted text (relative to where textToInsert starts)
            const placeholderRelativeStart = textToInsert.indexOf(firstPlaceholderText, prefixNewline.length);

            if (placeholderRelativeStart !== -1) {
                const selectionStart = start + prefixNewline.length + placeholderRelativeStart;
                const selectionEnd = selectionStart + firstPlaceholderText.length;
                textarea.setSelectionRange(selectionStart, selectionEnd);
            } else { // Fallback if placeholder not found (shouldn't happen)
                const firstPipeAfterPrefix = textToInsert.indexOf('|', prefixNewline.length);
                const cursorPos = start + (firstPipeAfterPrefix !== -1 ? firstPipeAfterPrefix + 2 : prefixNewline.length); // After first `| `
                textarea.setSelectionRange(cursorPos, cursorPos);
            }
        } else {
            // No header (e.g., 0-row table, though our logic forces a header)
            // Place cursor at the end of the inserted table structure
            textarea.selectionStart = textarea.selectionEnd = start + textToInsert.length;
        }
        this.savedRangeInfo = null; // Clear saved range
        textarea.focus();
        this._finalizeUpdate(textarea.value);
    }

    _handleIndent() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            document.execCommand('indent', false, null);
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else {
            this.markdownArea.focus();
            this._applyMarkdownListIndentInternal();
            // No explicit finalizeUpdate needed here as _applyMarkdownListIndentInternal calls it
        }
    }

    _handleOutdent() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            document.execCommand('outdent', false, null);
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else {
            this.markdownArea.focus();
            this._applyMarkdownListOutdentInternal();
            // No explicit finalizeUpdate needed here as _applyMarkdownListOutdentInternal calls it
        }
    }

    _applyMarkdownListIndentInternal() {
        const textarea = this.markdownArea;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;

        // Determine the range of full lines affected by the selection
        let lineStartIndex = text.lastIndexOf('\n', start - 1) + 1;
        if (start === 0) lineStartIndex = 0; // Handle start of document

        // If selection ends with a newline, consider the line before it as the last affected line
        let lineEndIndexSearch = end;
        if (end > 0 && text[end - 1] === '\n' && start !== end) { // Selection spans multiple lines ending in \n
            lineEndIndexSearch = end - 1;
        }
        let lineEndIndex = text.indexOf('\n', lineEndIndexSearch);
        if (lineEndIndex === -1) lineEndIndex = text.length; // Handle last line of document

        const affectedText = text.substring(lineStartIndex, lineEndIndex);
        const lines = affectedText.split('\n');
        const indentStr = '  '; // Standard Markdown indent is 2 spaces
        let charDiff = 0; // Total characters added/removed
        let firstLineCharDiff = 0; // Characters added/removed on the first selected line

        const newLines = lines.map((line, index) => {
            if (line.trim().length > 0) { // Only indent lines with content
                charDiff += indentStr.length;
                if (index === 0) firstLineCharDiff = indentStr.length;
                return indentStr + line;
            }
            return line; // Keep empty lines as they are
        });

        const newAffectedText = newLines.join('\n');
        textarea.value = text.substring(0, lineStartIndex) + newAffectedText + text.substring(lineEndIndex);

        // Adjust selection
        // If selection was a single point, new start is old start + indent (if line was indented)
        let newStart = start + (lines[0].trim().length > 0 ? firstLineCharDiff : 0);
        // If selection was empty and on an empty line, cursor shouldn't move.
        if (start === end && lines.length === 1 && lines[0].trim().length === 0) {
            newStart = start;
        }

        textarea.selectionStart = newStart;
        textarea.selectionEnd = end + charDiff;
        textarea.focus();
        this._finalizeUpdate(textarea.value); // Finalize after modification
    }

    _applyMarkdownListOutdentInternal() {
        const textarea = this.markdownArea;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;

        let lineStartIndex = text.lastIndexOf('\n', start - 1) + 1;
        if (start === 0) lineStartIndex = 0;

        let lineEndIndexSearch = end;
        if (end > 0 && text[end - 1] === '\n' && start !== end) {
            lineEndIndexSearch = end - 1;
        }
        let lineEndIndex = text.indexOf('\n', lineEndIndexSearch);
        if (lineEndIndex === -1) lineEndIndex = text.length;

        const affectedText = text.substring(lineStartIndex, lineEndIndex);
        const lines = affectedText.split('\n');
        const indentChars = ['  ', '\t']; // Prefer 2 spaces, but also handle tabs
        let charDiff = 0;
        let firstLineCharDiff = 0;

        const newLines = lines.map((line, index) => {
            for (const indentStr of indentChars) {
                if (line.startsWith(indentStr)) {
                    const diff = -indentStr.length;
                    if (index === 0) firstLineCharDiff = diff;
                    charDiff += diff;
                    return line.substring(indentStr.length);
                }
            }
            // If line doesn't start with indent, no change for this line's indent level
            return line;
        });

        const newAffectedText = newLines.join('\n');
        textarea.value = text.substring(0, lineStartIndex) + newAffectedText + text.substring(lineEndIndex);

        let newStart = Math.max(lineStartIndex, start + firstLineCharDiff);
        // If selection was empty, on an empty line, or on a non-indented line, cursor shouldn't move backward past line start.
        if (start === end && lines.length === 1 && firstLineCharDiff === 0) {
            if (lines[0].trim().length === 0 || (!lines[0].startsWith(' ') && !lines[0].startsWith('\t'))) {
                newStart = start; // No change in position if no outdent happened
            }
        }

        textarea.selectionStart = newStart;
        textarea.selectionEnd = Math.max(newStart, end + charDiff); // End selection cannot be before start
        textarea.focus();
        this._finalizeUpdate(textarea.value);
    }

    _applyMarkdownFormatting(buttonConfig) {
        const textarea = this.markdownArea;
        const textValue = textarea.value;
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        let selectedText = textarea.value.substring(start, end);

        const buttonEl = this.toolbar.querySelector(`.md-toolbar-button-${buttonConfig.id}`);
        const isCurrentlyActive = buttonEl ? buttonEl.classList.contains('active') : false;

        let prefix = buttonConfig.mdPrefix || '';
        let suffix = buttonConfig.mdSuffix || '';
        let newStart = start;
        let newEnd = end;

        // Toggle OFF logic
        if (isCurrentlyActive && (buttonConfig.type === 'inline' || buttonConfig.type === 'block-wrap')) {
            // Attempt to find the surrounding markers and remove them
            // This is a simplified search; robust parsing is complex.
            let actualPrefixStart = textValue.lastIndexOf(prefix, start - prefix.length);
            // If cursor is inside prefix (e.g. `**|text**`), adjust start
            if (start === end && actualPrefixStart !== -1 && start < actualPrefixStart + prefix.length) {
                actualPrefixStart = textValue.lastIndexOf(prefix, actualPrefixStart - 1);
            }
            if (start > 0 && textValue.substring(start - prefix.length, start) === prefix &&
                end < textValue.length && textValue.substring(end, end + suffix.length) === suffix &&
                selectedText.length > 0 // Ensure we are unwrapping a selection
            ) { // Exact selection of content within markers
                textarea.value = textValue.substring(0, start - prefix.length) +
                    selectedText +
                    textValue.substring(end + suffix.length);
                newStart = start - prefix.length;
                newEnd = newStart + selectedText.length;

            } else if (actualPrefixStart !== -1 && actualPrefixStart + prefix.length <= start) {
                // Prefix found before selection. Now look for suffix after selection.
                let actualSuffixStart = textValue.indexOf(suffix, end);
                if (actualSuffixStart !== -1 && end <= actualSuffixStart) {
                    const contentBetweenMarkers = textValue.substring(actualPrefixStart + prefix.length, actualSuffixStart);
                    textarea.value = textValue.substring(0, actualPrefixStart) +
                        contentBetweenMarkers +
                        textValue.substring(actualSuffixStart + suffix.length);
                    newStart = actualPrefixStart; // Cursor moves to where prefix was
                    newEnd = actualPrefixStart + contentBetweenMarkers.length; // Selection becomes the unwrapped content
                } else { // Prefix found, but no matching suffix after selection, fallback to wrapping
                    return this._wrapMarkdownFormatting(buttonConfig, selectedText, start, end);
                }
            } else { // No clear surrounding markers, fallback to wrapping (acts like toggle ON)
                return this._wrapMarkdownFormatting(buttonConfig, selectedText, start, end);
            }
        } else if (isCurrentlyActive && buttonConfig.type === 'block' && buttonConfig.mdPrefix) {
            // Toggle OFF for block types (e.g., headings, blockquote prefix)
            // This assumes single-line operation or operates on the first line of selection
            let lineStartIndex = textValue.lastIndexOf('\n', start - 1) + 1;
            if (start === 0 && textValue.charAt(0) !== '\n') lineStartIndex = 0;

            const currentLineFull = textValue.substring(lineStartIndex, textValue.indexOf('\n', lineStartIndex) === -1 ? textValue.length : textValue.indexOf('\n', lineStartIndex));
            const leadingSpaces = currentLineFull.match(/^(\s*)/)[0];
            const contentAfterSpaces = currentLineFull.substring(leadingSpaces.length);

            if (contentAfterSpaces.startsWith(prefix)) {
                const textAfterPrefix = contentAfterSpaces.substring(prefix.length);
                const beforeContentOfLine = textValue.substring(0, lineStartIndex + leadingSpaces.length);
                const afterContentOfLine = textValue.substring(lineStartIndex + currentLineFull.length);

                textarea.value = beforeContentOfLine + textAfterPrefix + afterContentOfLine;

                newStart = Math.max(lineStartIndex + leadingSpaces.length, start - prefix.length);
                newEnd = Math.max(newStart, end - prefix.length);

                if (start > lineStartIndex + leadingSpaces.length && start <= lineStartIndex + leadingSpaces.length + prefix.length) {
                    newStart = lineStartIndex + leadingSpaces.length;
                }
                if (end > lineStartIndex + leadingSpaces.length && end <= lineStartIndex + leadingSpaces.length + prefix.length) {
                    newEnd = lineStartIndex + leadingSpaces.length;
                }
                if (start === end && start > lineStartIndex + leadingSpaces.length && start <= lineStartIndex + leadingSpaces.length + prefix.length) {
                    newEnd = newStart;
                }

            } else { // Active but prefix not found as expected (e.g. multi-line selection), fallback
                return this._wrapMarkdownFormatting(buttonConfig, selectedText, start, end);
            }
        }
        else { // Toggle ON (wrap selected text or insert placeholder)
            return this._wrapMarkdownFormatting(buttonConfig, selectedText, start, end);
        }

        textarea.focus();
        textarea.setSelectionRange(newStart, newEnd);
        this._finalizeUpdate(textarea.value);
    }

    _wrapMarkdownFormatting(buttonConfig, selectedText, start, end) {
        const textarea = this.markdownArea;
        let replacementText = '';
        let prefix = buttonConfig.mdPrefix || '';
        let suffix = buttonConfig.mdSuffix || '';
        let placeholder = ''; // Placeholder text if selection is empty
        let cursorOffsetStart = prefix.length; // Default cursor pos after prefix
        let cursorOffsetEnd = prefix.length + (selectedText.length > 0 ? selectedText.length : 0);

        // Define placeholders for different formats
        switch (buttonConfig.id) {
            case 'h1': placeholder = 'Cabeçalho 1'; break;
            case 'h2': placeholder = 'Cabeçalho 2'; break;
            case 'h3': placeholder = 'Cabeçalho 3'; break;
            case 'bold': placeholder = 'negrito'; break;
            case 'italic': placeholder = 'itálico'; break;
            case 'strikethrough': placeholder = 'riscado'; break;
            case 'link':
                const url = prompt("Insira a URL do link:", "https://");
                if (!url) return; // User cancelled
                prefix = '[';
                suffix = `](${url})`;
                placeholder = selectedText || 'texto do link'; // Use selection if available
                cursorOffsetStart = 1; // Cursor inside `[` and `]`
                // If selectedText was used, cursorOffsetEnd needs to be calculated based on placeholder length
                cursorOffsetEnd = cursorOffsetStart + placeholder.length;
                selectedText = placeholder; // ensure selectedText is what we wrap for link
                break;
            // UL/OL are handled by _toggleOrConvertMarkdownList, this is a fallback or initial insert for _applyMarkdownFormatting path
            case 'ul':
            case 'ol':
                // This case should ideally not be hit frequently if _toggleOrConvertMarkdownList is primary.
                // This is more for a generic "insert new list item here" if called directly.
                placeholder = 'Item de lista';
                // If selected text includes newlines, format each line
                if (selectedText.includes('\n')) {
                    let count = 1;
                    replacementText = selectedText.split('\n').map(line => {
                        const itemPrefix = buttonConfig.id === 'ol' ? `${count++}. ` : '- ';
                        return itemPrefix + line;
                    }).join('\n');
                    cursorOffsetStart = 0; // Select the whole block
                    cursorOffsetEnd = replacementText.length;
                } else {
                    // Single line or no selection
                    let lineStartIdx = textarea.value.lastIndexOf('\n', start - 1) + 1;
                    // Add newline before if not at start of a line and content before cursor
                    if (start > 0 && textarea.value.charAt(start - 1) !== '\n' && start !== lineStartIdx) {
                        prefix = '\n' + (buttonConfig.id === 'ol' ? '1. ' : '- ');
                    } else {
                        prefix = (buttonConfig.id === 'ol' ? '1. ' : '- ');
                    }
                    cursorOffsetStart = prefix.length;
                    suffix = ''; // No suffix for single list items typically
                }
                break;
            case 'blockquote':
                placeholder = 'Citação';
                if (selectedText.includes('\n')) {
                    replacementText = selectedText.split('\n').map(line => `> ${line}`).join('\n');
                    cursorOffsetStart = 0;
                    cursorOffsetEnd = replacementText.length;
                } else {
                    let lineStartIdx = textarea.value.lastIndexOf('\n', start - 1) + 1;
                    if (start > 0 && textarea.value.charAt(start - 1) !== '\n' && start !== lineStartIdx) {
                        prefix = '\n> ';
                    } else {
                        prefix = '> ';
                    }
                    cursorOffsetStart = prefix.length;
                    suffix = '';
                }
                break;
            case 'codeblock':
                prefix = '```\n';
                suffix = '\n```';
                placeholder = 'código';
                // Ensure code block is on its own lines
                if (start > 0 && textarea.value[start - 1] !== '\n') prefix = '\n' + prefix;
                // Ensure newline after suffix if not already there or at end of doc
                if (end < textarea.value.length && textarea.value[end] !== '\n' && (selectedText || placeholder).slice(-1) !== '\n') suffix = suffix + '\n';
                else if ((selectedText || placeholder).slice(-1) === '\n' && textarea.value[end] !== '\n' && end < textarea.value.length) {
                    // if selection ends with newline, but document doesn't have one after, add it.
                    // However, typical suffix already has \n. This logic might need refinement.
                    // For ````\n` suffix, `\n``` might be what we want, so `\n```\n`
                    suffix = suffix.substring(1) + '\n'; // Avoid `\n\n``` if selection ends with \n
                }
                cursorOffsetStart = prefix.length; // Cursor after opening ```\n
                break;
            case 'inlinecode': placeholder = 'código'; break;
            default: return; // Unknown button type
        }

        // If replacementText is not set by multi-line handlers (UL/OL, Blockquote)
        if (!replacementText) {
            const textToWrap = selectedText || placeholder;
            replacementText = prefix + textToWrap + suffix;
            // Adjust cursorOffsetEnd if placeholder was used instead of selectedText
            if (!selectedText) {
                cursorOffsetEnd = cursorOffsetStart + placeholder.length;
            } else { // selectedText was used
                cursorOffsetEnd = cursorOffsetStart + selectedText.length;
            }
        }

        textarea.value = textarea.value.substring(0, start) + replacementText + textarea.value.substring(end);

        // Set selection
        if (selectedText.length > 0 && buttonConfig.id !== 'link') { // If text was selected, reselect it (or its new form)
            if (buttonConfig.type === 'inline' || buttonConfig.type === 'block-wrap' || buttonConfig.id === 'link') {
                textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
            } else { // For block prefixes like H1, select the whole inserted line/block
                textarea.setSelectionRange(start, start + replacementText.length);
            }
        } else { // No text selected, or it's a link (handled placeholder above)
            textarea.setSelectionRange(start + cursorOffsetStart, start + cursorOffsetEnd);
        }

        textarea.focus();
        this._finalizeUpdate(textarea.value);
    }

    _insertLink() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            const selection = window.getSelection();
            const currentText = selection.toString();
            const url = prompt("Insira a URL do link:", "https://");
            if (url) {
                // If no text is selected, create a placeholder text node
                if (!currentText && selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    const linkTextNode = document.createTextNode("texto do link");
                    range.deleteContents(); // Clear selection if any (e.g. collapsed cursor)
                    range.insertNode(linkTextNode);
                    // Select the newly inserted text node to apply the link to it
                    range.selectNodeContents(linkTextNode);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                document.execCommand('createLink', false, url);
                this._finalizeUpdate(this.editableArea.innerHTML);
            }
        } else { // Markdown mode
            // Reuse the _applyMarkdownFormatting logic for links
            this._applyMarkdownFormatting(this.options.buttons.find(b => b.id === 'link'));
        }
    }

    _insertHorizontalRuleAction() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            document.execCommand('insertHorizontalRule', false, null);
            // Ensure a paragraph exists after the HR for easier editing
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                // Try to find the inserted HR. It's often inserted at the start of the current block or replaces it.
                let hrNode = range.startContainer;
                // If hrNode is not HR, check its children or previous sibling if cursor moved
                if (hrNode.nodeName !== 'HR') {
                    if (range.startContainer.childNodes && range.startOffset > 0 && range.startContainer.childNodes[range.startOffset - 1] && range.startContainer.childNodes[range.startOffset - 1].nodeName === "HR") {
                        hrNode = range.startContainer.childNodes[range.startOffset - 1];
                    } else if (range.startContainer.previousSibling && range.startContainer.previousSibling.nodeName === "HR") {
                        hrNode = range.startContainer.previousSibling;
                    } else { // Fallback: find last HR in editor (less precise)
                        const hrs = this.editableArea.getElementsByTagName('hr');
                        if (hrs.length > 0) hrNode = hrs[hrs.length - 1];
                    }
                }

                if (hrNode && hrNode.nodeName === 'HR') {
                    let nextEl = hrNode.nextElementSibling;
                    let ensureParagraphAfter = true;
                    // Check if there's already a suitable block element after HR
                    if (nextEl && (nextEl.nodeName === 'P' || ['H1', 'H2', 'H3', 'UL', 'OL', 'BLOCKQUOTE', 'PRE', 'DIV', 'TABLE'].includes(nextEl.nodeName))) {
                        ensureParagraphAfter = false;
                    } else if (nextEl && nextEl.nodeName === 'BR') { // Remove trailing BR if any, to replace with P
                        nextEl.remove();
                    }

                    if (ensureParagraphAfter) {
                        const pAfter = document.createElement('p');
                        pAfter.innerHTML = '&#8203;'; // ZWS
                        hrNode.parentNode.insertBefore(pAfter, hrNode.nextSibling);
                        // Move cursor to the new paragraph
                        range.setStart(pAfter, pAfter.childNodes.length > 0 ? 1 : 0); // After ZWS
                        range.collapse(true);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
            }
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else { // Markdown mode
            this.markdownArea.focus();
            const textarea = this.markdownArea;
            const start = textarea.selectionStart;

            let textBefore = textarea.value.substring(0, start);
            let prefixNewline = "";
            // Ensure HR is on its own line, preferably with blank lines around
            if (start > 0 && textBefore.slice(-1) !== '\n') {
                prefixNewline = "\n\n"; // Needs two newlines
            } else if (start > 0 && textBefore.slice(-2) !== '\n\n' && textBefore.slice(-1) === '\n') {
                prefixNewline = "\n"; // Needs one more newline
            }

            const replacementText = prefixNewline + "---\n\n"; // MD for HR with blank lines
            textarea.value = textarea.value.substring(0, start) + replacementText + textarea.value.substring(textarea.selectionEnd);
            // Place cursor before the last newline of the inserted HR block for easier typing after
            const newCursorPos = start + replacementText.length - 1;
            textarea.selectionStart = textarea.selectionEnd = newCursorPos;
            this._finalizeUpdate(textarea.value);
        }
    }

    _insertCodeBlock() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            const selection = window.getSelection();
            const initialSelectedText = selection.toString(); // Get text if any is selected

            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = initialSelectedText || "código"; // Placeholder if no selection
            pre.appendChild(code);

            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.deleteContents(); // Remove selected text or current cursor position

                const fragment = document.createDocumentFragment();
                fragment.appendChild(pre);

                // Add a paragraph after for easier cursor placement
                const pAfter = document.createElement('p');
                pAfter.innerHTML = '&#8203;'; // ZWS
                fragment.appendChild(pAfter);

                range.insertNode(fragment);

                // Set cursor: if text was selected, move to pAfter. If placeholder, select placeholder.
                const newRange = document.createRange();
                if (initialSelectedText.length > 0) {
                    newRange.setStart(pAfter.firstChild || pAfter, pAfter.firstChild ? pAfter.firstChild.length : 0); // At end of ZWS in pAfter
                    newRange.collapse(true);
                } else {
                    newRange.selectNodeContents(code); // Select "código" placeholder
                }
                selection.removeAllRanges();
                selection.addRange(newRange);
            } else { // Fallback if no valid selection/range (should be rare with focus())
                this.editableArea.appendChild(pre);
                const pAfter = document.createElement('p');
                pAfter.innerHTML = '&#8203;';
                this.editableArea.appendChild(pAfter);
            }
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else { // Markdown mode
            this._applyMarkdownFormatting(this.options.buttons.find(b => b.id === 'codeblock'));
        }
    }

    _insertInlineCode() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            const selection = window.getSelection();
            const initialSelectedText = selection.toString().trim(); // Trim whitespace from selection

            const code = document.createElement('code');
            code.textContent = initialSelectedText || "código"; // Placeholder if no text selected

            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.deleteContents(); // Remove selected text
                range.insertNode(code); // Insert the <code> element

                // Insert a zero-width space after the code element for easier cursor placement
                const spaceNode = document.createTextNode('\u200B'); // ZWS
                range.setStartAfter(code); // Place range after the code element
                range.insertNode(spaceNode); // Insert the ZWS

                // Set cursor: if text was selected, move after ZWS. If placeholder, select placeholder.
                const newRange = document.createRange();
                if (initialSelectedText.length > 0) {
                    newRange.setStart(spaceNode, 1); // Cursor after ZWS
                    newRange.collapse(true);
                } else {
                    newRange.selectNodeContents(code); // Select "código" placeholder
                }
                selection.removeAllRanges();
                selection.addRange(newRange);

            } else { // Fallback if no valid selection
                this.editableArea.appendChild(code);
                const spaceNode = document.createTextNode('\u200B');
                this.editableArea.appendChild(spaceNode); // Add ZWS after for typing
            }
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else { // Markdown mode
            this._applyMarkdownFormatting(this.options.buttons.find(b => b.id === 'inlinecode'));
        }
    }

    _markdownToHtml(markdown) {
        if (typeof marked === 'undefined') {
            console.warn("marked.js library not found. Using basic Markdown to HTML conversion.");
            // Basic fallback if marked.js is not available
            let html = markdown
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
            // Very simplified Markdown to HTML for critical elements
            html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>') // Bold Italic
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')       // Bold
                .replace(/\*(.*?)\*/g, '<em>$1</em>')             // Italic
                .replace(/~~(.*?)~~/g, '<s>$1</s>')
                .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                .replace(/```([\s\S]*?)```/g, (match, p1) => `<pre><code>${p1.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`) // Code block
                .replace(/`(.*?)`/g, (match, p1) => `<code>${p1.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`)     // Inline code
                .replace(/^\s*[-*+] (.*)/gim, '<ul><li>$1</li></ul>') // very basic list
                .replace(/^\s*\d+\. (.*)/gim, '<ol><li>$1</li></ol>') // very basic list
                .replace(/^> (.*)/gim, '<blockquote>$1</blockquote>')
                .replace(/^---\s*$/gim, '<hr>') // Horizontal Rule
                .replace(/\n/g, '<br>');
            // Consolidate adjacent lists (very naive)
            html = html.replace(/<\/ul>\s*<br\s*\/?>\s*<ul>/gi, '').replace(/<\/ol>\s*<br\s*\/?>\s*<ol>/gi, '');
            return html;
        }
        // Use marked.js if available
        const markedOptions = {
            gfm: true,          // Enable GitHub Flavored Markdown
            breaks: false,      // Do not convert single newlines in paragraphs to <br> (standard GFM)
            smartLists: true,   // Use smarter list behavior
            // pedantic: false, // Don't be strict about GFM errors (default)
            // sanitize: false, // Do NOT sanitize HTML input (default false with marked).
            // Ensure your app handles sanitization if content comes from untrusted sources.
        };
        return marked.parse(markdown || '', markedOptions);
    }

    _htmlToMarkdown(elementOrHtml) {
        let tempDiv;
        if (typeof elementOrHtml === 'string') {
            tempDiv = document.createElement('div');
            tempDiv.innerHTML = elementOrHtml;
        } else {
            // Clone the node to avoid modifying the original editableArea directly
            tempDiv = elementOrHtml.cloneNode(true);
        }

        // Pre-processing: Remove zero-width spaces, often inserted by contentEditable
        tempDiv.innerHTML = tempDiv.innerHTML.replace(/\u200B/g, '');

        let markdown = '';
        this._normalizeNodes(tempDiv); // Normalize nodes (merge text, handle BRs) before recursive conversion

        Array.from(tempDiv.childNodes).forEach(child => {
            markdown += this._nodeToMarkdownRecursive(child);
        });

        // Post-processing: Clean up Markdown
        markdown = markdown.replace(/\n\s*\n\s*\n+/g, '\n\n'); // Collapse multiple blank lines to a maximum of two
        markdown = markdown.replace(/ +\n/g, '\n');           // Trim trailing spaces from lines
        return markdown.trim(); // Trim leading/trailing whitespace from the final Markdown
    }

    _normalizeNodes(parentElement) {
        let currentNode = parentElement.firstChild;
        while (currentNode) {
            let nextNode = currentNode.nextSibling; // Store next sibling before potential modifications

            // 1. Merge adjacent text nodes
            if (currentNode.nodeType === Node.TEXT_NODE && nextNode && nextNode.nodeType === Node.TEXT_NODE) {
                currentNode.textContent += nextNode.textContent;
                parentElement.removeChild(nextNode);
                // After merging, nextNode is now invalid.
                // The loop should re-evaluate from currentNode with its new nextSibling.
                // So, we don't advance currentNode here, just update nextNode for the next iteration.
                nextNode = currentNode.nextSibling; // This effectively re-evaluates next for the merged currentNode
            }
            // 2. BR handling: Convert <br> to text newline characters where appropriate
            else if (currentNode.nodeName === 'BR') {
                // A <br> signifies a newline. We'll replace it with a text node containing '\n'.
                // This simplifies later recursive processing, as text nodes handle newlines naturally.
                // However, be careful not to create double newlines if text already ends/starts with one.

                // If BR is followed by nothing, another BR, or a block element, it's a "hard" line break.
                // If followed by inline content, it still implies a newline before that content.
                if (!nextNode || nextNode.nodeName === 'BR' || this._isBlockElement(nextNode)) {
                    // Prepend newline if previous wasn't already ending with one
                    const textNode = document.createTextNode('\n');
                    parentElement.insertBefore(textNode, currentNode);
                } else if (nextNode.nodeType === Node.TEXT_NODE && !nextNode.textContent.startsWith('\n')) {
                    // Prepend newline to the following text node if it doesn't already start with one
                    nextNode.textContent = '\n' + nextNode.textContent;
                } else if (nextNode.nodeType === Node.ELEMENT_NODE && !this._isBlockElement(nextNode)) {
                    // If next is an inline element, insert a newline text node before it
                    const textNode = document.createTextNode('\n');
                    parentElement.insertBefore(textNode, nextNode);
                }
                parentElement.removeChild(currentNode);
                currentNode = nextNode; // Current node is removed, move to the (original) next
                continue; // Skip recursion for removed BR, and re-loop from current
            }


            // Recurse for element nodes that haven't been removed/merged
            if (currentNode && currentNode.childNodes && currentNode.childNodes.length > 0 && currentNode.nodeType === Node.ELEMENT_NODE) {
                this._normalizeNodes(currentNode);
            }

            currentNode = nextNode; // Move to the next sibling for the next iteration
        }
    }

    _isBlockElement(node) {
        if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
        const blockElements = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'LI', 'BLOCKQUOTE', 'PRE', 'HR', 'TABLE', 'THEAD', 'TBODY', 'TR', 'DIV', 'IMG'];
        return blockElements.includes(node.nodeName);
    }

    // Helper to process children of an inline element (strong, em, a, etc.)
    _processInlineContainerRecursive(element, options = {}) {
        let markdown = '';
        Array.from(element.childNodes).forEach(child => {
            markdown += this._nodeToMarkdownRecursive(child, options);
        });
        return markdown;
    }

    _listToMarkdownRecursive(listNode, indent = "", listType = null, listCounter = 1, options = {}) {
        const LOG_PREFIX = `[List md${indent ? `|indent:'${indent}'` : ''}]`;
        // console.log(`${LOG_PREFIX} START Node:`, listNode.nodeName, listNode.cloneNode(true));

        let markdown = '';
        const isOrdered = listNode.nodeName === 'OL';

        Array.from(listNode.childNodes).forEach((childOfListNode, liIndex) => {
            // console.log(`${LOG_PREFIX} Child of List (${liIndex}):`, childOfListNode.nodeName, childOfListNode.cloneNode(true));

            if (childOfListNode.nodeName === 'LI') {
                const liNode = childOfListNode;
                // console.log(`${LOG_PREFIX} Processing LI (${liIndex}):`, liNode.outerHTML.substring(0, 100) + (liNode.outerHTML.length > 100 ? '...' : ''));

                const itemMarker = isOrdered ? `${listCounter}. ` : '- ';
                let listItemContent = '';
                let hasNestedListChild = false;

                Array.from(liNode.childNodes).forEach((contentNodeOfLi, contentIndex) => {
                    // console.log(`${LOG_PREFIX}   LI Child (${liIndex}.${contentIndex}):`, contentNodeOfLi.nodeName);
                    if (contentNodeOfLi.nodeName === 'UL' || contentNodeOfLi.nodeName === 'OL') {
                        hasNestedListChild = true;
                        const trimmedListItemContentSoFar = listItemContent.trimEnd();
                        if (trimmedListItemContentSoFar.length > 0 && !trimmedListItemContentSoFar.endsWith('\n')) {
                            listItemContent = trimmedListItemContentSoFar + '\n';
                        }
                        // console.log(`${LOG_PREFIX}     RECURSING for nested list (from LI):`, contentNodeOfLi.nodeName, `New indent: '${indent + '  '}'`);
                        listItemContent += this._listToMarkdownRecursive(contentNodeOfLi, indent + '  ', contentNodeOfLi.nodeName, 1, options);
                        // console.log(`${LOG_PREFIX}     RETURNED from recursion (from LI). listItemContent now: "${listItemContent.replace(/\n/g, '\\n')}"`);
                    } else {
                        const nodeMd = this._nodeToMarkdownRecursive(contentNodeOfLi, options);
                        // console.log(`${LOG_PREFIX}     Node to MD (LI child): "${nodeMd.replace(/\n/g, '\\n')}" from`, contentNodeOfLi.nodeName);
                        listItemContent += nodeMd;
                    }
                });
                // console.log(`${LOG_PREFIX}   LI (${liIndex}) All children processed. listItemContent: "${listItemContent.replace(/\n/g, '\\n')}"`);
                // console.log(`${LOG_PREFIX}   LI (${liIndex}) hasNestedListChild: ${hasNestedListChild}`);

                let isEffectivelyOnlyNestedList = false;
                if (hasNestedListChild) {
                    let significantNonListContentPresent = false;
                    let firstLiChildNode = null;
                    for (let i = 0; i < liNode.childNodes.length; i++) {
                        if (liNode.childNodes[i].nodeType === Node.TEXT_NODE && liNode.childNodes[i].textContent.trim().length === 0) continue;
                        firstLiChildNode = liNode.childNodes[i];
                        break;
                    }

                    if (firstLiChildNode && (firstLiChildNode.nodeName === 'UL' || firstLiChildNode.nodeName === 'OL')) {
                        Array.from(liNode.childNodes).forEach(c => {
                            if (c !== firstLiChildNode) {
                                if (c.nodeType === Node.TEXT_NODE && c.textContent.trim().length > 0) {
                                    significantNonListContentPresent = true;
                                } else if (c.nodeType !== Node.TEXT_NODE && !(c.nodeName === 'UL' || c.nodeName === 'OL')) {
                                    significantNonListContentPresent = true;
                                }
                            }
                        });
                        if (!significantNonListContentPresent) {
                            isEffectivelyOnlyNestedList = true;
                        }
                    }
                }
                // console.log(`${LOG_PREFIX}   LI (${liIndex}) isEffectivelyOnlyNestedList: ${isEffectivelyOnlyNestedList}`);

                if (isEffectivelyOnlyNestedList) {
                    const mdPiece = `${indent}${itemMarker.trimEnd()}\n` + listItemContent.trimEnd() + '\n';
                    // console.log(`${LOG_PREFIX}   LI (${liIndex}) Case: Effectively ONLY nested. MD piece: "${mdPiece.replace(/\n/g, '\\n')}"`);
                    markdown += mdPiece;
                } else {
                    const outputLines = [];
                    const lines = listItemContent.split('\n');

                    const firstActualTextLine = lines.shift() || "";
                    // console.log(`${LOG_PREFIX}   LI (${liIndex}) Case: Mixed/Text. firstActualTextLine: "${firstActualTextLine}"`);
                    outputLines.push(`${indent}${itemMarker}${firstActualTextLine.trimEnd()}`);

                    const continuationIndent = indent + ' '.repeat(itemMarker.length);
                    const subListLinePattern = new RegExp(`^${(indent + '  ').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
                    // console.log(`${LOG_PREFIX}   LI (${liIndex}) continuationIndent: "${continuationIndent}", subListLinePattern: ${subListLinePattern}`);

                    lines.forEach((line, lineIdx) => {
                        // console.log(`${LOG_PREFIX}     LI (${liIndex}) Processing line ${lineIdx + 1}: "${line.replace(/\n/g, '\\n')}"`);
                        if (subListLinePattern.test(line)) {
                            // console.log(`${LOG_PREFIX}       Line ${lineIdx + 1} MATCHES subListLinePattern. Adding as is.`);
                            outputLines.push(line);
                        } else if (line.trim().length > 0) {
                            // console.log(`${LOG_PREFIX}       Line ${lineIdx + 1} is continuation text. Indenting.`);
                            outputLines.push(continuationIndent + line.trimStart());
                        } else {
                            // console.log(`${LOG_PREFIX}       Line ${lineIdx + 1} is empty. Preserving with indent.`);
                            outputLines.push(continuationIndent + line);
                        }
                    });

                    let currentLiMarkdown;
                    if (outputLines.length === 1 && firstActualTextLine.trim().length === 0 && !hasNestedListChild) {
                        currentLiMarkdown = `${indent}${itemMarker.trimEnd()}\n`;
                        // console.log(`${LOG_PREFIX}   LI (${liIndex}) Was completely empty. MD: "${currentLiMarkdown.replace(/\n/g, '\\n')}"`);
                    } else {
                        currentLiMarkdown = outputLines.join('\n').trimEnd() + '\n';
                        // console.log(`${LOG_PREFIX}   LI (${liIndex}) Joined outputLines. MD: "${currentLiMarkdown.replace(/\n/g, '\\n')}"`);
                    }
                    markdown += currentLiMarkdown;
                }

                if (isOrdered) listCounter++;

            } else if ((childOfListNode.nodeType === Node.TEXT_NODE && childOfListNode.textContent.trim().length > 0) ||
                (childOfListNode.nodeType === Node.ELEMENT_NODE && childOfListNode.nodeName !== 'SCRIPT' && childOfListNode.nodeName !== 'TEMPLATE')) {

                // console.log(`${LOG_PREFIX} Non-LI child under list (${liIndex}): ${childOfListNode.nodeName}. Content: "${(childOfListNode.textContent || '').substring(0,50).replace(/\n/g, '\\n')}"`);

                if (childOfListNode.nodeName === 'UL' || childOfListNode.nodeName === 'OL') {
                    // console.log(`${LOG_PREFIX}   Rogue node IS a LIST (${childOfListNode.nodeName}). Recursing with increased indent '${indent + '  '}'.`);
                    markdown += this._listToMarkdownRecursive(childOfListNode, indent + '  ', childOfListNode.nodeName, 1, options);
                } else {
                    // console.log(`${LOG_PREFIX}   Rogue node is NOT a list (${childOfListNode.nodeName}). Treating as implicit item.`);
                    const itemMarker = isOrdered ? `${listCounter}. ` : '- ';
                    let contentFromRogueNode = this._nodeToMarkdownRecursive(childOfListNode, { ...options, inTableCell: false });

                    const lines = contentFromRogueNode.trim().split('\n');
                    let firstLine = lines.shift() || "";
                    let processedContent = firstLine.trimEnd();

                    if (lines.length > 0) {
                        lines.forEach(line => {
                            if (line.trim().length > 0) {
                                processedContent += '\n' + indent + '  ' + line.trimStart();
                            } else if (processedContent.length > 0) {
                                processedContent += '\n' + indent + '  ';
                            }
                        });
                    }
                    if (processedContent.trim().length > 0) {
                        const mdPiece = `${indent}${itemMarker}${processedContent.trimEnd()}\n`;
                        // console.log(`${LOG_PREFIX}     Non-LI child (implicit item). MD piece: "${mdPiece.replace(/\n/g, '\\n')}"`);
                        markdown += mdPiece;
                        if (isOrdered) listCounter++;
                    }
                }
            } else {
                // console.log(`${LOG_PREFIX} Skipping insignificant child of List (${liIndex}):`, childOfListNode.nodeName, `"${(childOfListNode.textContent || '').substring(0,20).replace(/\n/g, '\\n')}"`);
            }
        });

        // console.log(`${LOG_PREFIX} END. Returning markdown: "${markdown.replace(/\n/g, '\\n')}"`);
        return markdown;
    }

    // Convert content of a table cell (TH/TD) to Markdown
    _cellContentToMarkdown(cellNode) {
        let markdown = '';
        Array.from(cellNode.childNodes).forEach(child => {
            // Pass inTableCell option to handle specific conversions for cell content
            markdown += this._nodeToMarkdownRecursive(child, { inTableCell: true });
        });
        // For table cells, internal newlines (from <br> in _nodeToMarkdownRecursive) are kept.
        // Pipes should already be escaped by recursive calls.
        return markdown.trim().replace(/<br\s*\/?>/gi, ' <br> '); // Ensure spaces around <br> if used for GFM multi-line cells, then it becomes <br> in MD.
        // Simpler: just replace with a space for single-line focus, rely on <br> for multi-line.
        // Standard GFM tables don't support multi-line cells via raw newlines. `<br>` is the way.
    }

    // Helper to prepare complex node content for _cellContentToMarkdown
    // by serializing it to HTML first, with some pre-processing.
    _nodeToHtmlForTableCell(node) {
        const clone = node.cloneNode(true); // Work on a copy

        // 1. Escape pipes `|` in text nodes that are NOT inside <pre> or <code>
        const textWalker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT, null, false);
        let currentTextNode;
        while (currentTextNode = textWalker.nextNode()) {
            if (!this._findParentElement(currentTextNode, ['PRE', 'CODE'])) { // Don't escape in pre/code
                currentTextNode.textContent = currentTextNode.textContent.replace(/\|/g, '\\|');
            }
        }

        // 2. Convert actual newline characters in text nodes to <br> elements
        //    (unless they are inside <pre> or <code>).
        //    This helps preserve multi-line text from (e.g.) <p> tags within cells.
        const textNodesToProcessForNewline = [];
        const preCodeElements = Array.from(clone.querySelectorAll('pre, code'));

        // Recursive function to collect relevant text nodes
        const collectTextNodes = (currentNode) => {
            const isInPreCode = preCodeElements.some(pcElement => pcElement.contains(currentNode) && pcElement !== currentNode);

            if (currentNode.nodeType === Node.TEXT_NODE) {
                if (!isInPreCode && currentNode.textContent.includes('\n')) {
                    textNodesToProcessForNewline.push(currentNode);
                }
            } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
                // Don't recurse into pre/code for this specific newline conversion
                if (currentNode.nodeName !== 'PRE' && currentNode.nodeName !== 'CODE') {
                    Array.from(currentNode.childNodes).forEach(collectTextNodes);
                }
            }
        };
        Array.from(clone.childNodes).forEach(collectTextNodes); // Start collection from children of the main cloned node

        // Process text nodes in reverse to avoid issues with node list changes during iteration
        for (let i = textNodesToProcessForNewline.length - 1; i >= 0; i--) {
            const tn = textNodesToProcessForNewline[i];
            if (tn.parentNode && tn.textContent.includes('\n')) {
                const fragments = tn.textContent.split('\n');
                const parent = tn.parentNode;
                if (parent) { // Ensure parent exists
                    fragments.forEach((fragment, idx) => {
                        if (fragment.length > 0) parent.insertBefore(document.createTextNode(fragment), tn);
                        if (idx < fragments.length - 1) parent.insertBefore(document.createElement('br'), tn);
                    });
                    parent.removeChild(tn); // Remove original text node
                }
            }
        }

        // Serialize the modified clone to an HTML string
        const tempSerializer = document.createElement('div');
        // tempSerializer.appendChild(clone); // This was wrong for 'node' itself. It should be its children.
        // If 'node' is e.g. a P, we want its innerHTML after processing.
        // The clone *is* the node (e.g. P), so we want its innerHTML.
        while (clone.firstChild) {
            tempSerializer.appendChild(clone.firstChild); // Move children to serializer
        }
        return tempSerializer.innerHTML; // This HTML will then be converted to MD by _cellContentToMarkdown
    }


    _nodeToMarkdownRecursive(node, options = {}) {
        switch (node.nodeName) {
            case '#text':
                let text = node.textContent;
                // In table cells, pipes need escaping and newlines become <br> (handled later by _cellContentToMarkdown if this is text for it)
                if (options && options.inTableCell) {
                    text = text.replace(/\|/g, '\\|'); // Escape pipes
                    // Convert literal newlines in text to <br> for GFM table cells, unless in pre/code
                    if (!this._findParentElement(node, 'PRE') && !this._findParentElement(node, 'CODE')) {
                        text = text.replace(/\n/g, '<br>');
                    }
                } else {
                    // Outside table cells, don't convert \n to <br> unless it's a BR element.
                    // Collapse multiple spaces, but not in pre/code context
                    if (!this._findParentElement(node, 'PRE') && !this._findParentElement(node, 'CODE')) {
                        text = text.replace(/  +/g, ' ');
                    }
                }
                return text;
            case 'BR':
                // In table cells, a <BR> element becomes a literal "<br>" string for GFM.
                // Outside, it's a simple newline.
                return (options && options.inTableCell) ? '<br>' : '\n';

            case 'IMG':
                // If an image is directly in a table cell, GFM doesn't render it well.
                // We'll output its HTML, which _cellContentToMarkdown might keep.
                if (options && options.inTableCell) {
                    return node.outerHTML; // Let cell renderer decide
                }
                const imgSrc = node.getAttribute('src') || '';
                const imgAlt = node.getAttribute('alt') || '';
                return `![${imgAlt}](${imgSrc})\n\n`; // Image as a block, ensure newlines

            // Inline elements
            case 'B': case 'STRONG': return `**${this._processInlineContainerRecursive(node, options).trim()}**`;
            case 'I': case 'EM': return `*${this._processInlineContainerRecursive(node, options).trim()}*`;
            case 'S': case 'DEL': case 'STRIKE': return `~~${this._processInlineContainerRecursive(node, options).trim()}~~`;
            case 'A':
                const href = node.getAttribute('href') || '';
                const linkText = this._processInlineContainerRecursive(node, options).trim();
                return `[${linkText}](${href})`;
            case 'CODE':
                // Handle <code> only if it's not inside a <pre> (which handles its own <code> content)
                if (!this._findParentElement(node, 'PRE')) {
                    let codeContent = node.textContent; // Use textContent for `<code>` to get raw text
                    if (options && options.inTableCell) {
                        codeContent = codeContent.replace(/\|/g, '\\|'); // Escape pipes if in table cell
                    }
                    return `\`${codeContent.trim()}\``; // Trim whitespace around inline code
                }
                return ''; // Content handled by <pre>

            // Block elements
            case 'P':
            case 'UL': case 'OL':
            case 'BLOCKQUOTE':
            case 'PRE':
            case 'H1': case 'H2': case 'H3': // Assuming only H1-H3 are toolbar options
            case 'HR':
            case 'DIV': // Generic block container, treat like P unless it's the editor root

                // If these block elements are inside a table cell, we need to convert them differently.
                // Standard GFM table cells don't directly support nested block elements.
                // We convert their content to HTML, which _cellContentToMarkdown will process.
                if (options && options.inTableCell) {
                    return this._nodeToHtmlForTableCell(node);
                }

                // Standard block element handling (not in table cell)
                if (node.nodeName === 'P') {
                    const pParent = node.parentNode;
                    // Special newline handling if P is directly inside LI or BLOCKQUOTE
                    const isInsideListItemOrBlockquote = pParent && (pParent.nodeName === 'LI' || pParent.nodeName === 'BLOCKQUOTE');
                    let pContent = this._processInlineContainerRecursive(node, options).trim();

                    if (isInsideListItemOrBlockquote) {
                        // Less aggressive newlines for Ps within these contexts
                        // A single newline is often enough, or sometimes handled by list/blockquote logic.
                        return pContent.replace(/\n\s*\n/g, '\n').trim() + (pContent ? '\n' : ''); // Ensure one newline if content
                    }
                    // Standard paragraph: ensure double newline after if content exists
                    return pContent ? `${pContent}\n\n` : '';
                }
                if (node.nodeName === 'UL' || node.nodeName === 'OL') {
                    let listMd = this._listToMarkdownRecursive(node, "", node.nodeName, 1, options);
                    // Ensure list block ends with double newline if it has content and not already there
                    if (listMd.trim().length > 0 && !listMd.endsWith('\n\n')) {
                        if (!listMd.endsWith('\n')) listMd += '\n'; // Ensure at least one newline
                        listMd += '\n'; // Add the second newline for block spacing
                    }
                    return listMd;
                }
                if (node.nodeName === 'BLOCKQUOTE') {
                    const quoteContentRaw = this._processInlineContainerRecursive(node, options);
                    // Split content by newlines, trim each, filter empty, then prefix with "> "
                    const quoteLines = quoteContentRaw.split('\n').map(line => line.trim());
                    const nonEmptyLines = quoteLines.filter(line => line.length > 0);
                    // Ensure double newline after the blockquote block
                    return nonEmptyLines.map(line => `> ${line}`).join('\n') + (nonEmptyLines.length > 0 ? '\n\n' : '');
                }
                if (node.nodeName === 'PRE') {
                    // Expect <pre><code>...</code></pre> structure from `marked.js` or editor
                    if (node.firstChild && node.firstChild.nodeName === 'CODE') {
                        const codeElement = node.firstChild;
                        // Try to get language from class (e.g., class="language-javascript")
                        const langMatch = codeElement.className.match(/language-(\S+)/);
                        const lang = langMatch ? langMatch[1] : '';
                        let preContent = codeElement.textContent; // Raw text content
                        // Ensure a final newline for code block content if not present
                        if (preContent.length > 0 && !preContent.endsWith('\n')) preContent += '\n';
                        return `\`\`\`${lang}\n${preContent}\`\`\`\n\n`; // Double newline after block
                    }
                    // Fallback for PRE without a CODE child (less common for Markdown sources)
                    let preTextContent = node.textContent;
                    if (preTextContent.length > 0 && !preTextContent.endsWith('\n')) preTextContent += '\n';
                    return `\`\`\`\n${preTextContent}\`\`\`\n\n`;
                }
                if (node.nodeName.match(/^H[1-3]$/)) { // H1, H2, H3
                    return `${'#'.repeat(parseInt(node.nodeName[1]))} ${this._processInlineContainerRecursive(node, options).trim()}\n\n`;
                }
                if (node.nodeName === 'HR') {
                    return '\n---\n\n'; // Ensure HR is on its own lines and block-spaced
                }
                if (node.nodeName === 'DIV') {
                    // Treat DIV like a paragraph unless it's the editor area itself
                    const divContent = this._processInlineContainerRecursive(node, options).trim();
                    if (node.classList.contains('md-editable-area')) return divContent; // Root editor, just content
                    return divContent ? `${divContent}\n\n` : ''; // Generic div as block, needs spacing
                }
                break; // Should not be reached if all block types above are handled

            case 'TABLE':
                let tableMarkdown = '';
                const tHeadNode = node.querySelector('thead');
                const tBodyNode = node.querySelector('tbody') || node; // Use node itself if no tbody
                let colCount = 0;
                let headerMdContent = '';
                let bodyMdContent = '';

                // Process THEAD
                if (tHeadNode) {
                    Array.from(tHeadNode.querySelectorAll('tr')).forEach(headerRowNode => {
                        const headerCells = Array.from(headerRowNode.querySelectorAll('th, td'))
                            .map(cell => this._cellContentToMarkdown(cell)); // Use specific cell to MD
                        if (headerCells.length > 0) {
                            headerMdContent += `| ${headerCells.join(' | ')} |\n`;
                            if (colCount === 0) colCount = headerCells.length;
                        }
                    });
                }

                // Attempt to infer header from TBODY if no THEAD or THEAD was empty
                let firstTBodyRowUsedAsHeader = false;
                if (colCount === 0 && tBodyNode) {
                    const firstRow = tBodyNode.querySelector('tr');
                    if (firstRow) {
                        // Heuristic: if first row cells are TH or contain only STRONG/B/EM (common for manual headers)
                        const isLikelyHeader = Array.from(firstRow.children).some(cell => cell.nodeName === 'TH') ||
                            (Array.from(firstRow.children).every(cell => cell.children.length === 1 && ['STRONG', 'B', 'EM', 'I'].includes(cell.firstElementChild.nodeName)));

                        if (isLikelyHeader) {
                            const potentialHeaderCells = Array.from(firstRow.querySelectorAll('th, td'))
                                .map(cell => this._cellContentToMarkdown(cell));
                            if (potentialHeaderCells.length > 0) {
                                headerMdContent += `| ${potentialHeaderCells.join(' | ')} |\n`;
                                colCount = potentialHeaderCells.length;
                                firstTBodyRowUsedAsHeader = true;
                            }
                        }
                    }
                }

                // Fallback column count if still zero (e.g., table with no header row at all)
                if (colCount === 0 && tBodyNode) {
                    const firstDataRow = tBodyNode.querySelector('tr');
                    if (firstDataRow) {
                        colCount = firstDataRow.querySelectorAll('td, th').length;
                    }
                }

                // If absolutely no way to determine columns or header, it's not a valid GFM table.
                // Outputting its content as simple blocks might be better than malformed table.
                if (colCount === 0 && headerMdContent.trim() === '') {
                    let fallbackContent = '';
                    Array.from(node.querySelectorAll('tr')).forEach(trNode => {
                        Array.from(trNode.querySelectorAll('th, td')).forEach(cellNode => {
                            // Process children of cell as normal blocks, not as table cell content
                            fallbackContent += this._nodeToMarkdownRecursive(cellNode, { ...options, inTableCell: false });
                        });
                    });
                    return fallbackContent.trim() ? fallbackContent.trim() + '\n\n' : '';
                }


                tableMarkdown = headerMdContent;
                // Add separator line if there was a header or we have columns
                if (headerMdContent.trim() !== '' || colCount > 0) {
                    tableMarkdown += `|${' --- |'.repeat(colCount)}\n`;
                }

                // Process TBODY
                Array.from(tBodyNode.querySelectorAll('tr')).forEach((bodyRowNode, index) => {
                    if (firstTBodyRowUsedAsHeader && index === 0) return; // Skip if this row was used as header

                    const bodyCellsHtml = Array.from(bodyRowNode.querySelectorAll('td, th')); // Can have TH in tbody
                    let bodyCellsMd = bodyCellsHtml.map(cell => this._cellContentToMarkdown(cell));

                    // Ensure the row has the correct number of cells for markdown table structure
                    const finalCells = [];
                    for (let k = 0; k < colCount; k++) {
                        finalCells.push(bodyCellsMd[k] || ''); // Push empty string for missing cells to maintain alignment
                    }
                    bodyMdContent += `| ${finalCells.join(' | ')} |\n`;
                });
                tableMarkdown += bodyMdContent;
                return tableMarkdown.trim() ? tableMarkdown.trim() + '\n\n' : ''; // Ensure trailing newlines for block

            case 'LI': // List items are primarily handled by _listToMarkdownRecursive.
                // This case handles content *within* an LI if called directly on LI.
                return this._processInlineContainerRecursive(node, options).trim();

            default: // For unknown elements, try to process their children as inline content
                if (node.childNodes && node.childNodes.length > 0) {
                    return this._processInlineContainerRecursive(node, options);
                }
                // If no children, or unhandled, return its text content, applying same rules as #text
                let defaultText = (node.textContent || '');
                if (!(options && options.inTableCell) && !this._findParentElement(node, 'PRE') && !this._findParentElement(node, 'CODE')) {
                    defaultText = defaultText.replace(/  +/g, ' ');
                }
                if (options && options.inTableCell) {
                    defaultText = defaultText.replace(/\|/g, '\\|');
                    if (!this._findParentElement(node, 'PRE') && !this._findParentElement(node, 'CODE')) {
                        defaultText = defaultText.replace(/\n/g, '<br>');
                    }
                }
                return defaultText;
        }
    }


    getValue() {
        if (this.currentMode === 'markdown') {
            return this.markdownArea.value;
        } else {
            return this._htmlToMarkdown(this.editableArea);
        }
    }

    setValue(markdown, isInitialSetup = false) {
        const html = this._markdownToHtml(markdown);
        this.editableArea.innerHTML = html;
        this.markdownArea.value = markdown || ''; // Ensure it's not null/undefined

        if (this.currentMode === 'markdown') {
            this._updateMarkdownLineNumbers();
        }

        // Update undo stack based on whether it's an initial setup or a programmatic change
        if (!this.isUpdatingFromUndoRedo && !isInitialSetup) {
            const currentContent = this.currentMode === 'wysiwyg' ? this.editableArea.innerHTML : this.markdownArea.value;
            this._pushToUndoStack(currentContent);
        } else if (isInitialSetup) {
            // For initial setup, the undo stack should start with this first value
            const currentContent = this.currentMode === 'wysiwyg' ? this.editableArea.innerHTML : this.markdownArea.value;
            this.undoStack = [currentContent];
            this.redoStack = [];
        }
        this._updateToolbarActiveStates();
    }

    destroy() {
        // Remove dynamically created elements and event listeners
        this._hideTableGridSelector();
        if (this.tableGridSelector && this.tableGridSelector.parentNode) {
            this.tableGridSelector.parentNode.removeChild(this.tableGridSelector);
            this.tableGridSelector = null;
        }
        this._hideContextualTableToolbar();
        if (this.contextualTableToolbar && this.contextualTableToolbar.parentNode) {
            this.contextualTableToolbar.parentNode.removeChild(this.contextualTableToolbar);
            this.contextualTableToolbar = null;
        }
        if (this.imageDialog && this.imageDialog.parentNode) {
            this.imageDialog.parentNode.removeChild(this.imageDialog);
            this.imageDialog = null;
            this.imageUrlInput = null;
            this.imageAltInput = null;
        }

        this.savedRangeInfo = null;
        this.currentTableSelectionInfo = null;


        // Remove global listeners
        if (this._boundListeners.handleSelectionChange) {
            document.removeEventListener('selectionchange', this._boundListeners.handleSelectionChange);
        }
        // Specific listeners for popups like table grid, contextual toolbar were already removed by their hide methods.

        // Remove listeners from toolbar buttons
        if (this.toolbarButtonListeners) {
            this.toolbarButtonListeners.forEach(({ button, listener }) => {
                button.removeEventListener('click', listener);
            });
            this.toolbarButtonListeners = [];
        }

        // Remove listeners from editor areas
        if (this.editableArea) {
            this.editableArea.removeEventListener('input', this._boundListeners.onEditableAreaInput);
            this.editableArea.removeEventListener('keydown', this._boundListeners.onEditableAreaKeyDown);
            this.editableArea.removeEventListener('keyup', this._boundListeners.updateWysiwygToolbar);
            this.editableArea.removeEventListener('click', this._boundListeners.updateWysiwygToolbar);
            this.editableArea.removeEventListener('click', this._boundListeners.onEditableAreaClickForTable);
            this.editableArea.removeEventListener('focus', this._boundListeners.updateWysiwygToolbar);
        }

        if (this.markdownArea) {
            this.markdownArea.removeEventListener('input', this._boundListeners.onMarkdownAreaInput);
            this.markdownArea.removeEventListener('keydown', this._boundListeners.onMarkdownAreaKeyDown);
            this.markdownArea.removeEventListener('keyup', this._boundListeners.updateMarkdownToolbar);
            this.markdownArea.removeEventListener('click', this._boundListeners.updateMarkdownToolbar);
            this.markdownArea.removeEventListener('focus', this._boundListeners.updateMarkdownToolbar);
            this.markdownArea.removeEventListener('scroll', this._boundListeners.syncScrollMarkdown);
        }

        // Remove listeners from tab buttons
        if (this.wysiwygTabButton) {
            this.wysiwygTabButton.removeEventListener('click', this._boundListeners.onWysiwygTabClick);
        }
        if (this.markdownTabButton) {
            this.markdownTabButton.removeEventListener('click', this._boundListeners.onMarkdownTabClick);
        }

        // Clear the host element
        if (this.hostElement) {
            this.hostElement.innerHTML = '';
        }

        // Nullify properties
        this._boundListeners = null;
        this.editableArea = null;
        this.markdownArea = null;
        this.markdownLineNumbersDiv = null;
        this.markdownTextareaWrapper = null;
        this.markdownEditorContainer = null;
        this.toolbar = null;
        this.contentAreaContainer = null;
        this.tabsContainer = null;
        this.editorWrapper = null;
        this.hostElement = null;
        this.options = null;
        this.undoStack = null;
        this.redoStack = null;
    }
}