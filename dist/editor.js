const ICON_HEADING_MENU = `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M6 4V20 M18 4V20 M6 12H18"/></svg>`;
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
                { id: 'heading', label: ICON_HEADING_MENU, title: 'Cabeçalhos', action: '_toggleHeadingMenu' },
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
        this.headingMenu = null;
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
        this._boundListeners.closeHeadingMenuOnClickOutside = this._closeHeadingMenuOnClickOutside.bind(this);
        this._boundListeners.onEditableAreaClickForTable = this._handleEditableAreaClickForTable.bind(this);
        this._boundListeners.closeContextualTableToolbarOnClickOutside = this._closeContextualTableToolbarOnClickOutside.bind(this);
        this._boundListeners.syncScrollMarkdown = this._syncScrollMarkdown.bind(this);
        this._boundListeners.handleDragOver = this._handleDragOver.bind(this);
        this._boundListeners.handleDragLeave = this._handleDragLeave.bind(this);
        this._boundListeners.handleDrop = this._handleDrop.bind(this);
        this.toolbarButtonListeners = [];
        if (this.options.showToolbar) {
            this._createToolbar();
        }
        this._createEditorContentArea();
        this._createTabs();
        this._createHeadingMenu();
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
    _performInsertImage(url, alt, dropEvent = null) {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            let range;
            const selection = window.getSelection();
            if (dropEvent && typeof document.caretRangeFromPoint === 'function') {
                try {
                    range = document.caretRangeFromPoint(dropEvent.clientX, dropEvent.clientY);
                    if (range && !this.editableArea.contains(range.commonAncestorContainer) && !(this.editableArea === range.commonAncestorContainer)) {
                        range = null;
                    }
                } catch (e) {
                    console.warn("Error getting range from drop point:", e);
                    range = null;
                }
            }
            if (!range) {
                if (this.savedRangeInfo instanceof Range && this.editableArea.contains(this.savedRangeInfo.commonAncestorContainer)) {
                    range = this.savedRangeInfo;
                } else if (selection.rangeCount > 0 && this.editableArea.contains(selection.getRangeAt(0).commonAncestorContainer)) {
                    range = selection.getRangeAt(0);
                } else {
                    range = document.createRange();
                    range.selectNodeContents(this.editableArea);
                    range.collapse(false);
                }
            }
            selection.removeAllRanges();
            selection.addRange(range);
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
            range.setStart(pAfter, pAfter.childNodes.length > 0 ? 1 : 0);
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
        } else {
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
            const newCellNode = document.createElement(c.nodeName);
            newCellNode.innerHTML = '&#8203;';
            if (c.colSpan > 1) {
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
            this.currentTableSelectionInfo.rowIndex = newRow.rowIndex;
        }
        this._finalizeUpdate(this.editableArea.innerHTML);
        this._showContextualTableToolbar(cellToFocus || newRow.cells[0]);
    }
    _insertColumnWysiwyg(left) {
        if (!this.currentTableSelectionInfo) return;
        const { cell: currentCell, table } = this.currentTableSelectionInfo;
        const clickedCellVisualIndex = currentCell.cellIndex;
        const targetInsertVisualIndex = left ? clickedCellVisualIndex : clickedCellVisualIndex + 1;
        let newFocusedCellInCurrentRow = null;
        for (const row of table.rows) {
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
            this.currentTableSelectionInfo.cell = newFocusedCellInCurrentRow;
            this.currentTableSelectionInfo.cellIndex = newFocusedCellInCurrentRow.cellIndex;
        }
        this._finalizeUpdate(this.editableArea.innerHTML);
        this._showContextualTableToolbar(newFocusedCellInCurrentRow || currentCell);
    }
    _focusCell(cellElement) {
        if (!cellElement) return;
        this.editableArea.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        if (!cellElement.firstChild || (cellElement.firstChild.nodeType === Node.TEXT_NODE && cellElement.firstChild.textContent === '')) {
            cellElement.innerHTML = '&#8203;';
        }
        if (cellElement.firstChild) {
            const offset = (cellElement.firstChild.nodeType === Node.TEXT_NODE && cellElement.firstChild.textContent === '\u200B') ? 1 : 0;
            range.setStart(cellElement.firstChild, offset);
        } else {
            range.selectNodeContents(cellElement);
        }
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    _createHeadingMenu() {
        this.headingMenu = document.createElement('div');
        this.headingMenu.classList.add('md-heading-menu');
        
        const headingOptions = [
            { label: 'Parágrafo', level: 0 },
            { label: 'Cabeçalho 1', level: 1 },
            { label: 'Cabeçalho 2', level: 2 },
            { label: 'Cabeçalho 3', level: 3 },
            { label: 'Cabeçalho 4', level: 4 },
            { label: 'Cabeçalho 5', level: 5 },
            { label: 'Cabeçalho 6', level: 6 },
        ];

        headingOptions.forEach(opt => {
            const item = document.createElement('div');
            item.classList.add('md-heading-menu-item');
            item.textContent = opt.label;
            item.dataset.level = opt.level;
            item.addEventListener('click', () => {
                this._applyHeading(opt.level);
                this._hideHeadingMenu();
            });
            this.headingMenu.appendChild(item);
        });

        this.editorWrapper.appendChild(this.headingMenu);
    }
    _applyHeading(level) {
        const tagName = `H${level}`;
        const mdPrefix = `${'#'.repeat(level)} `;

        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            document.execCommand('formatBlock', false, level > 0 ? tagName : 'P');
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else {
            this.markdownArea.focus();
            const textarea = this.markdownArea;
            const textValue = textarea.value;
            const start = textarea.selectionStart;
            
            let lineStartIndex = textValue.lastIndexOf('\n', start - 1) + 1;
            const lineEndIndex = textValue.indexOf('\n', lineStartIndex);
            const currentLine = textValue.substring(lineStartIndex, lineEndIndex === -1 ? textValue.length : lineEndIndex);
            
            const existingHeaderMatch = currentLine.match(/^(#+\s)/);
            let newLine = currentLine;
            let diff = 0;

            if (existingHeaderMatch) {
                const existingPrefix = existingHeaderMatch[1];
                const content = currentLine.substring(existingPrefix.length);
                if (level > 0) {
                    newLine = mdPrefix + content;
                    diff = mdPrefix.length - existingPrefix.length;
                } else {
                    newLine = content;
                    diff = -existingPrefix.length;
                }
            } else if (level > 0) {
                 newLine = mdPrefix + currentLine;
                 diff = mdPrefix.length;
            }
            
            textarea.value = textValue.substring(0, lineStartIndex) + newLine + textValue.substring(lineEndIndex === -1 ? textValue.length : lineEndIndex);
            textarea.setSelectionRange(start + diff, start + diff);
            this._finalizeUpdate(textarea.value);
        }
    }
    _showHeadingMenu(buttonElement) {
        if (this.headingMenu.style.display === 'block') return;

        // Update active item in menu
        const items = this.headingMenu.querySelectorAll('.md-heading-menu-item');
        items.forEach(item => item.classList.remove('active'));
        
        let currentLevel = 0; // 0 for paragraph
        if (this.currentMode === 'wysiwyg') {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                let blockElement = selection.getRangeAt(0).commonAncestorContainer;
                if (blockElement.nodeType === Node.TEXT_NODE) {
                    blockElement = blockElement.parentNode;
                }
                while (blockElement && blockElement !== this.editableArea) {
                    const match = blockElement.nodeName.match(/^H([1-6])$/);
                    if (match) {
                        currentLevel = parseInt(match[1], 10);
                        break;
                    }
                    if(blockElement.nodeName === 'P') break;
                    blockElement = blockElement.parentNode;
                }
            }
        } else {
            const textValue = this.markdownArea.value;
            const selStart = this.markdownArea.selectionStart;
            let lineStart = textValue.lastIndexOf('\n', selStart - 1) + 1;
            const currentLine = textValue.substring(lineStart, textValue.indexOf('\n', lineStart));
            const match = currentLine.match(/^(#+)\s/);
            if (match) {
                currentLevel = match[1].length;
            }
        }

        const activeItem = this.headingMenu.querySelector(`.md-heading-menu-item[data-level="${currentLevel}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }

        this.headingMenu.style.display = 'block';
        const buttonRect = buttonElement.getBoundingClientRect();
        const editorRect = this.editorWrapper.getBoundingClientRect();
        this.headingMenu.style.top = `${buttonRect.bottom - editorRect.top + 5}px`;
        this.headingMenu.style.left = `${buttonRect.left - editorRect.left}px`;
        
        const menuRect = this.headingMenu.getBoundingClientRect();
        if (menuRect.right > window.innerWidth - 10) {
            this.headingMenu.style.left = `${window.innerWidth - menuRect.width - 10 - editorRect.left}px`;
        }
        if (menuRect.left < 10) {
            this.headingMenu.style.left = `${10 - editorRect.left}px`;
        }

        this._boundListeners.closeHeadingMenuOnEsc = (e) => this._handlePopupEscKey(e, this._hideHeadingMenu.bind(this));
        document.addEventListener('click', this._boundListeners.closeHeadingMenuOnClickOutside, true);
        document.addEventListener('keydown', this._boundListeners.closeHeadingMenuOnEsc, true);
    }
    _hideHeadingMenu() {
        if (!this.headingMenu || this.headingMenu.style.display === 'none') return;
        this.headingMenu.style.display = 'none';
        document.removeEventListener('click', this._boundListeners.closeHeadingMenuOnClickOutside, true);
        if (this._boundListeners.closeHeadingMenuOnEsc) {
            document.removeEventListener('keydown', this._boundListeners.closeHeadingMenuOnEsc, true);
        }
    }
    _closeHeadingMenuOnClickOutside(event) {
        const headingButton = this.toolbar.querySelector('.md-toolbar-button-heading');
        if (this.headingMenu &&
            !this.headingMenu.contains(event.target) &&
            event.target !== headingButton &&
            !headingButton.contains(event.target)) {
            this._hideHeadingMenu();
        }
    }
    _toggleHeadingMenu(buttonElement) {
        if (this.headingMenu.style.display === 'block') {
            this._hideHeadingMenu();
        } else {
            this._showHeadingMenu(buttonElement);
        }
    }
    _createTableGridSelector() {
        this.tableGridSelector = document.createElement('div');
        this.tableGridSelector.classList.add('md-table-grid-selector');
        this.gridCellsContainer = document.createElement('div');
        this.gridCellsContainer.classList.add('md-table-grid-cells-container');
        this.gridCellsContainer.style.gridTemplateColumns = `repeat(${this.options.tableGridMaxCols}, 18px)`;
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
        const firstCell = this.gridCellsContainer.querySelector('[data-row="0"][data-col="0"]');
        if (firstCell) firstCell.classList.add('highlighted');
    }
    _showTableGridSelector(buttonElement) {
        if (this.tableGridSelector.style.display === 'block') return;
        if (this.currentMode === 'wysiwyg') {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const currentRange = selection.getRangeAt(0);
                if (this.editableArea.contains(currentRange.commonAncestorContainer)) {
                    this.savedRangeInfo = currentRange.cloneRange();
                } else {
                    const range = document.createRange();
                    range.selectNodeContents(this.editableArea);
                    range.collapse(false);
                    this.savedRangeInfo = range;
                }
            } else {
                const range = document.createRange();
                range.selectNodeContents(this.editableArea);
                range.collapse(false);
                this.savedRangeInfo = range;
            }
        } else {
            this.savedRangeInfo = {
                start: this.markdownArea.selectionStart,
                end: this.markdownArea.selectionEnd
            };
        }
        this._resetTableGridVisuals();
        this.tableGridSelector.style.display = 'block';
        const buttonRect = buttonElement.getBoundingClientRect();
        const editorRect = this.editorWrapper.getBoundingClientRect();
        this.tableGridSelector.style.top = `${buttonRect.bottom - editorRect.top + 5}px`;
        this.tableGridSelector.style.left = `${buttonRect.left - editorRect.left}px`;
        const gridRect = this.tableGridSelector.getBoundingClientRect();
        if (gridRect.right > window.innerWidth - 10) {
            this.tableGridSelector.style.left = `${window.innerWidth - gridRect.width - 10 - editorRect.left}px`;
        }
        if (gridRect.left < 10) {
            this.tableGridSelector.style.left = `${10 - editorRect.left}px`;
        }
        this._boundListeners.closeTableGridOnEsc = (e) => this._handlePopupEscKey(e, this._hideTableGridSelector.bind(this));
        document.addEventListener('click', this._boundListeners.closeTableGridOnClickOutside, true);
        document.addEventListener('keydown', this._boundListeners.closeTableGridOnEsc, true);
    }
    _hideTableGridSelector() {
        if (!this.tableGridSelector || this.tableGridSelector.style.display === 'none') return;
        this.tableGridSelector.style.display = 'none';
        this.savedRangeInfo = null;
        document.removeEventListener('click', this._boundListeners.closeTableGridOnClickOutside, true);
        if (this._boundListeners.closeTableGridOnEsc) {
            document.removeEventListener('keydown', this._boundListeners.closeTableGridOnEsc, true);
        }
    }
    _closeTableGridOnClickOutside(event) {
        const tableButton = this.toolbar.querySelector('.md-toolbar-button-table');
        if (this.tableGridSelector &&
            !this.tableGridSelector.contains(event.target) &&
            event.target !== tableButton &&
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
        this._performInsertTable(rows, cols);
        this._hideTableGridSelector();
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
            button.dataset.buttonId = buttonConfig.id;
            const listener = () => this._handleToolbarClick(buttonConfig, button);
            button.addEventListener('click', listener);
            this.toolbarButtonListeners.push({ button, listener });
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
        this.editableArea.setAttribute('spellcheck', 'false');
        this.contentAreaContainer.appendChild(this.editableArea);
        this.markdownEditorContainer = document.createElement('div');
        this.markdownEditorContainer.classList.add('md-markdown-editor-container');
        this.markdownEditorContainer.style.display = 'none';
        this.markdownLineNumbersDiv = document.createElement('div');
        this.markdownLineNumbersDiv.classList.add('md-markdown-line-numbers');
        this.markdownTextareaWrapper = document.createElement('div');
        this.markdownTextareaWrapper.classList.add('md-markdown-textarea-wrapper');
        this.markdownArea = document.createElement('textarea');
        this.markdownArea.classList.add('md-markdown-area');
        this.markdownArea.setAttribute('spellcheck', 'false');
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
        this._hideHeadingMenu();
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
        } else {
            if (!isInitialSetup) {
                this.markdownArea.value = this._htmlToMarkdown(this.editableArea);
            }
            this.editableArea.style.display = 'none';
            this.markdownEditorContainer.style.display = 'flex';
            this.markdownTabButton.classList.add('active');
            this.wysiwygTabButton.classList.remove('active');
            this.markdownArea.focus();
            this._updateMarkdownLineNumbers();
        }
        const currentEditorContent = (mode === 'wysiwyg') ? this.editableArea.innerHTML : this.markdownArea.value;
        if (!isInitialSetup && previousContent !== currentEditorContent) {
            this.undoStack = [currentEditorContent];
            this.redoStack = [];
        } else if (isInitialSetup || this.undoStack.length === 0) {
            this.undoStack = [currentEditorContent];
            this.redoStack = [];
        }
        this._updateToolbarActiveStates();
    }
    _updateMarkdownLineNumbers() {
        if (!this.markdownArea || !this.markdownLineNumbersDiv) return;
        const lines = this.markdownArea.value.split('\n');
        let lineCount = lines.length;
        let lineNumbersHtml = '';
        for (let i = 1; i <= lineCount; i++) {
            lineNumbersHtml += `<div>${i}</div>`;
        }
        this.markdownLineNumbersDiv.innerHTML = lineNumbersHtml || '<div>1</div>';
        this._syncScrollMarkdown();
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
        this._clearToolbarActiveStates();
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
        if (indentButton) indentButton.disabled = true;
        if (outdentButton) outdentButton.disabled = true;
        this.options.buttons.forEach(btnConfig => {
            const buttonEl = this.toolbar.querySelector(`.md-toolbar-button-${btnConfig.id}`);
            if (!buttonEl || btnConfig.id === 'table' || btnConfig.id === 'image') return;
            let isActive = false;
            if (btnConfig.id === 'heading') {
                let blockElement = selection.getRangeAt(0).commonAncestorContainer;
                if (blockElement.nodeType === Node.TEXT_NODE) {
                    blockElement = blockElement.parentNode;
                }
                while (blockElement && blockElement !== this.editableArea) {
                    if (blockElement.nodeName.match(/^H[1-6]$/)) {
                        isActive = true;
                        break;
                    }
                    blockElement = blockElement.parentNode;
                }
            } else if (btnConfig.execCommand) {
                if (btnConfig.execCommand === 'formatBlock' && btnConfig.value) {
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
                let el = selection.getRangeAt(0).commonAncestorContainer;
                if (el.nodeType === Node.TEXT_NODE) el = el.parentElement;
                while (el && el !== this.editableArea) {
                    if (el.nodeName === 'CODE' && (!el.parentElement || el.parentElement.nodeName !== 'PRE')) {
                        isActive = true; break;
                    }
                    el = el.parentElement;
                }
            } else if (btnConfig.id === 'codeblock') {
                let el = selection.getRangeAt(0).commonAncestorContainer;
                if (el.nodeType === Node.TEXT_NODE) el = el.parentElement;
                while (el && el !== this.editableArea) {
                    if (el.nodeName === 'PRE') {
                        isActive = true; break;
                    }
                    el = el.parentElement;
                }
            } else if (btnConfig.id === 'indent' || btnConfig.id === 'outdent') {
                const commonAncestor = selection.getRangeAt(0).commonAncestorContainer;
                const listItem = this._findParentElement(commonAncestor, 'LI');
                if (listItem) {
                    if (btnConfig.id === 'indent' && indentButton) {
                        indentButton.disabled = false;
                    }
                    if (btnConfig.id === 'outdent' && outdentButton) {
                        if (document.queryCommandEnabled('outdent')) {
                            outdentButton.disabled = false;
                        } else {
                            outdentButton.disabled = true;
                        }
                    }
                }
                isActive = false;
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
            if (btnConfig.id === 'heading') {
                let lineStart = textValue.lastIndexOf('\n', selStart - 1) + 1;
                const currentLine = textValue.substring(lineStart, textValue.indexOf('\n', lineStart));
                isActive = /^#{1,6}\s/.test(currentLine);
            }
            else if (btnConfig.id === 'indent') {
                const lineStart = textValue.lastIndexOf('\n', selStart - 1) + 1;
                const currentLineFull = textValue.substring(lineStart, textValue.indexOf('\n', lineStart) === -1 ? textValue.length : textValue.indexOf('\n', lineStart));
                if (selStart !== selEnd || currentLineFull.trim().length > 0) {
                    if (indentButton) indentButton.disabled = false;
                }
                isActive = false;
            } else if (btnConfig.id === 'outdent') {
                const selectionStartLineNum = textValue.substring(0, selStart).split('\n').length - 1;
                const selectionEndLineNum = textValue.substring(0, selEnd).split('\n').length - 1;
                const allLines = textValue.split('\n');
                let canOutdentThisSelection = false;
                for (let i = selectionStartLineNum; i <= selectionEndLineNum; i++) {
                    if (allLines[i] && allLines[i].match(/^(\s\s+|\t)/)) {
                        canOutdentThisSelection = true;
                        break;
                    }
                }
                if (canOutdentThisSelection) {
                    if (outdentButton) outdentButton.disabled = false;
                }
                isActive = false;
            }
            else if (btnConfig.type === 'inline' && btnConfig.mdPrefix && btnConfig.mdSuffix) {
                const prefix = btnConfig.mdPrefix;
                const suffix = btnConfig.mdSuffix;
                const prefixLen = prefix.length;
                const suffixLen = suffix.length;
                let foundPrefixPos = -1;
                let scanStart = selStart - prefixLen;
                if (selStart === selEnd) scanStart = selStart;
                for (let i = scanStart; i >= 0; i--) {
                    if (textValue.substring(i, i + prefixLen) === prefix) {
                        let tempSuffixSearch = textValue.indexOf(suffix, i + prefixLen);
                        if (
                            tempSuffixSearch !== -1 &&
                            tempSuffixSearch < selStart - prefixLen &&
                            tempSuffixSearch + suffixLen < selStart
                        ) {
                            let nextPotentialPrefix = textValue.indexOf(prefix, tempSuffixSearch + suffixLen);
                            if (nextPotentialPrefix !== -1 && nextPotentialPrefix < selStart - prefixLen) {
                                i = nextPotentialPrefix + 1;
                                continue;
                            } else {
                                break;
                            }
                        } else {
                            foundPrefixPos = i;
                            break;
                        }
                    }
                    if (textValue[i - 1] === '\n' && i < selStart - prefixLen) break;
                }
                if (foundPrefixPos !== -1) {
                    let foundSuffixPos = -1;
                    let suffixSearchStart = (selStart === selEnd ? selStart : selEnd);
                    for (let i = suffixSearchStart; i <= textValue.length - suffixLen; i++) {
                        if (textValue.substring(i, i + suffixLen) === suffix) {
                            if (
                                foundPrefixPos < selStart &&
                                (foundPrefixPos + prefixLen <= selStart || selStart === selEnd) &&
                                i >= (selStart === selEnd ? selEnd - suffixLen : selEnd) &&
                                (selEnd <= i + (selStart === selEnd ? 0 : suffixLen) || selStart === selEnd)
                            ) {
                                let interveningPrefix = textValue
                                    .substring(foundPrefixPos + prefixLen, i)
                                    .lastIndexOf(prefix);
                                if (interveningPrefix !== -1) {
                                    interveningPrefix += (foundPrefixPos + prefixLen);
                                    let interveningSuffix = textValue.indexOf(suffix, interveningPrefix + prefixLen);
                                    if (interveningSuffix === -1 || interveningSuffix >= i) {
                                        continue;
                                    }
                                }
                                foundSuffixPos = i;
                                break;
                            }
                        }
                        if (textValue[i] === '\n' && i > selEnd && textValue.length - suffixLen > i) break;
                    }
                    if (foundPrefixPos !== -1 && foundSuffixPos !== -1) {
                        isActive = true;
                        actualFormatStart = foundPrefixPos;
                        actualFormatEnd = foundSuffixPos + suffixLen;
                    }
                }
                if (btnConfig.id === 'italic' && isActive) {
                    if (textValue.substring(actualFormatStart, actualFormatStart + 2) === '**' &&
                        textValue.substring(actualFormatEnd - 2, actualFormatEnd) === '**') {
                        isActive = false;
                    } else {
                        const charBeforeActualPrefix = (actualFormatStart > 0) ? textValue.charAt(actualFormatStart - 1) : null;
                        const charAfterActualSuffix = (actualFormatEnd < textValue.length) ? textValue.charAt(actualFormatEnd) : null;
                        if (charBeforeActualPrefix === '*' && charAfterActualSuffix === '*') {
                            const isThirdStarBefore = (actualFormatStart - 2 >= 0) && (textValue.charAt(actualFormatStart - 2) === '*');
                            const isThirdStarAfter = (actualFormatEnd + 1 < textValue.length) && (textValue.charAt(actualFormatEnd + 1) === '*');
                            if (isThirdStarBefore && isThirdStarAfter) {
                                isActive = true;
                            } else {
                                isActive = false;
                            }
                        } else {
                            const charAfterActualPrefix = (actualFormatStart + prefixLen < actualFormatEnd) ? textValue.charAt(actualFormatStart + prefixLen) : null;
                            const charBeforeActualSuffix = (actualFormatEnd - suffixLen - 1 >= actualFormatStart + prefixLen) ? textValue.charAt(actualFormatEnd - suffixLen - 1) : null;
                            if (charAfterActualPrefix === '*' && charBeforeActualSuffix === '*') {
                                isActive = false;
                            }
                        }
                    }
                }
            }
            else if ((btnConfig.type === 'block' || btnConfig.type === 'block-list') && btnConfig.mdPrefix) {
                let lineStart = textValue.lastIndexOf('\n', selStart - 1) + 1;
                if (selStart === 0 && textValue.charAt(0) !== '\n') {
                    lineStart = 0;
                }
                const currentLineEnd = textValue.indexOf('\n', lineStart);
                const currentLine = textValue.substring(
                    lineStart,
                    currentLineEnd === -1 ? textValue.length : currentLineEnd
                );
                isActive = currentLine.trimStart().startsWith(btnConfig.mdPrefix);
            }
            else if (btnConfig.type === 'block-wrap' && btnConfig.mdPrefix && btnConfig.mdSuffix) {
                const p = btnConfig.mdPrefix;
                const s = btnConfig.mdSuffix;
                if (selStart >= p.length && textValue.substring(selStart - p.length, selStart) === p &&
                    selEnd <= textValue.length - s.length && textValue.substring(selEnd, selEnd + s.length) === s) {
                    isActive = true;
                } else {
                    let potentialPrefixStart = textValue.lastIndexOf(p, selStart - (selStart === selEnd ? 0 : p.length));
                    if (potentialPrefixStart !== -1) {
                        let potentialSuffixStart = textValue.indexOf(s, Math.max(potentialPrefixStart + p.length, selEnd - (selStart === selEnd ? s.length : 0)));
                        if (potentialSuffixStart !== -1 &&
                            potentialPrefixStart < selStart &&
                            selEnd <= potentialSuffixStart + (selStart === selEnd ? s.length : 0)
                        ) {
                            isActive = true;
                        }
                    }
                }
            }
            if (buttonEl && btnConfig.id !== 'indent' && btnConfig.id !== 'outdent') {
                if (isActive) {
                    buttonEl.classList.add('active');
                } else {
                    buttonEl.classList.remove('active');
                }
            }
        });
    }
    _attachEventListeners() {
        this._boundListeners.onEditableAreaInput = (e) => this._onAreaInput(e, () => this.editableArea.innerHTML, this._boundListeners.updateWysiwygToolbar);
        this._boundListeners.onMarkdownAreaInput = (e) => {
            this._onAreaInput(e, () => this.markdownArea.value, this._boundListeners.updateMarkdownToolbar);
            this._updateMarkdownLineNumbers();
        };
        this._boundListeners.onEditableAreaKeyDown = (e) => this._onAreaKeyDown(e, this.editableArea, this._boundListeners.updateWysiwygToolbar);
        this._boundListeners.onMarkdownAreaKeyDown = (e) => this._onAreaKeyDown(e, this.markdownArea, this._boundListeners.updateMarkdownToolbar);
        this.editableArea.addEventListener('input', this._boundListeners.onEditableAreaInput);
        this.editableArea.addEventListener('keydown', this._boundListeners.onEditableAreaKeyDown);
        this.editableArea.addEventListener('keyup', this._boundListeners.updateWysiwygToolbar);
        this.editableArea.addEventListener('click', this._boundListeners.updateWysiwygToolbar);
        this.editableArea.addEventListener('click', this._boundListeners.onEditableAreaClickForTable);
        this.editableArea.addEventListener('focus', this._boundListeners.updateWysiwygToolbar);
        this.editableArea.addEventListener('dragover', this._boundListeners.handleDragOver);
        this.editableArea.addEventListener('dragleave', this._boundListeners.handleDragLeave);
        this.editableArea.addEventListener('drop', this._boundListeners.handleDrop);
        this.markdownArea.addEventListener('input', this._boundListeners.onMarkdownAreaInput);
        this.markdownArea.addEventListener('keydown', this._boundListeners.onMarkdownAreaKeyDown);
        this.markdownArea.addEventListener('keyup', this._boundListeners.updateMarkdownToolbar);
        this.markdownArea.addEventListener('click', this._boundListeners.updateMarkdownToolbar);
        this.markdownArea.addEventListener('focus', this._boundListeners.updateMarkdownToolbar);
        this.markdownArea.addEventListener('scroll', this._boundListeners.syncScrollMarkdown);
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
                                const row = this._findParentElement(nextCell, 'TR');
                                this.currentTableSelectionInfo = { cell: nextCell, row: row, table: table, cellIndex: nextCell.cellIndex, rowIndex: row.rowIndex };
                                this._showContextualTableToolbar(nextCell);
                            } else if (!e.shiftKey && nextIndex >= cells.length) {
                                let nextFocusable = table.nextElementSibling;
                                while (nextFocusable && (nextFocusable.nodeName === "#text" || !nextFocusable.hasAttribute('tabindex') && nextFocusable.nodeName !== "P")) {
                                    nextFocusable = nextFocusable.nextElementSibling;
                                }
                                if (nextFocusable && nextFocusable.nodeName === "P" && nextFocusable.firstChild) {
                                    const range = document.createRange();
                                    range.setStart(nextFocusable.firstChild, 0);
                                    range.collapse(true);
                                    sel.removeAllRanges();
                                    sel.addRange(range);
                                } else if (nextFocusable) {
                                    nextFocusable.focus();
                                }
                                this._hideContextualTableToolbar();
                            }
                        }
                    } else {
                        document.execCommand('insertText', false, '    ');
                    }
                } else {
                    document.execCommand('insertText', false, '    ');
                }
            } else {
                const start = targetArea.selectionStart;
                const text = targetArea.value;
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
                if (!handledByListLogic) {
                    document.execCommand('insertText', false, '    ');
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
        while (currentNode && currentNode !== this.editableArea && currentNode !== this.markdownArea && currentNode !== document.body && currentNode !== document.documentElement) {
            if (tagNames.includes(currentNode.nodeName)) return currentNode;
            currentNode = currentNode.parentNode;
        }
        return null;
    }
    _pushToUndoStack(content) {
        const stack = this.undoStack;
        if (stack.length > 0 && stack[stack.length - 1] === content) return;
        stack.push(content);
        this.redoStack = [];
        if (stack.length > 50) stack.shift();
    }
    _performUndoRedo(sourceStack, targetStack, isUndoOperation) {
        this.isUpdatingFromUndoRedo = true;
        const canProceed = isUndoOperation ? sourceStack.length > 1 : sourceStack.length > 0;
        if (canProceed) {
            const stateToMove = sourceStack.pop();
            targetStack.push(stateToMove);
            const contentToRestore = isUndoOperation ? sourceStack[sourceStack.length - 1] : stateToMove;
            if (this.currentMode === 'wysiwyg') {
                this.editableArea.innerHTML = contentToRestore;
            } else {
                this.markdownArea.value = contentToRestore;
                this._updateMarkdownLineNumbers();
            }
            this._moveCursorToEnd();
            if (this.options.onUpdate) this.options.onUpdate(this.getValue());
            this._updateToolbarActiveStates();
        }
        this.isUpdatingFromUndoRedo = false;
    }
    _undo() {
        this._performUndoRedo(this.undoStack, this.redoStack, true);
    }
    _redo() {
        this._performUndoRedo(this.redoStack, this.undoStack, false);
    }
    _moveCursorToEnd() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            const range = document.createRange();
            const sel = window.getSelection();
            if (this.editableArea.childNodes.length > 0) {
                const lastChild = this.editableArea.lastChild;
                if (lastChild.nodeType === Node.TEXT_NODE) {
                    range.setStart(lastChild, lastChild.length);
                } else {
                    range.selectNodeContents(lastChild);
                }
                range.collapse(false);
            } else {
                range.setStart(this.editableArea, 0);
                range.collapse(true);
            }
            sel.removeAllRanges();
            sel.addRange(range);
        } else {
            this.markdownArea.focus();
            this.markdownArea.setSelectionRange(this.markdownArea.value.length, this.markdownArea.value.length);
        }
    }
    _handleToolbarClick(buttonConfig, buttonElement) {
        if (buttonConfig.id === 'table' || buttonConfig.id === 'image' || buttonConfig.id === 'heading') {
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
        } else {
            this.markdownArea.focus();
            if ((buttonConfig.type === 'block-list')) {
                this._toggleOrConvertMarkdownList(buttonConfig);
            } else if (buttonConfig.action && typeof this[buttonConfig.action] === 'function') {
                this[buttonConfig.action]();
            } else {
                this._applyMarkdownFormatting(buttonConfig);
            }
        }
        this._updateToolbarActiveStates();
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
        const newButtonPrefixPattern = buttonConfig.mdPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const isNewTypeOl = buttonConfig.id === 'ol';
        let olCounter = 1;
        let charDiff = 0;
        let firstLineCharDiff = 0;
        delete this.pendingPlaceholderSelection;
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
            if ((isNewTypeOl && currentMarkerIsOl) || (!isNewTypeOl && currentMarkerIsUl)) {
                newLine = leadingSpaces + textAfterMarker;
                const diff = -originalMarkerLength;
                charDiff += diff;
                if (index === 0) firstLineCharDiff = diff;
            } else if (currentMarkerMatch) {
                newLine = leadingSpaces + newMarkerCurrentLine + textAfterMarker;
                const diff = newMarkerCurrentLine.length - originalMarkerLength;
                charDiff += diff;
                if (index === 0) firstLineCharDiff = diff;
                if (isNewTypeOl) olCounter++;
            } else {
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
        this.editableArea.focus();
        let rangeToUse;
        const selection = window.getSelection();
        if (this.savedRangeInfo instanceof Range && this.editableArea.contains(this.savedRangeInfo.commonAncestorContainer)) {
            rangeToUse = this.savedRangeInfo;
            selection.removeAllRanges();
            selection.addRange(rangeToUse);
        } else if (selection.rangeCount > 0 && this.editableArea.contains(selection.getRangeAt(0).commonAncestorContainer)) {
            rangeToUse = selection.getRangeAt(0);
        } else {
            rangeToUse = document.createRange();
            rangeToUse.selectNodeContents(this.editableArea);
            rangeToUse.collapse(false);
            selection.removeAllRanges();
            selection.addRange(rangeToUse);
        }
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        if (rows >= 1) {
            const hr = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                const th = document.createElement('th');
                th.innerHTML = `Cabeçalho ${j + 1}`;
                hr.appendChild(th);
            }
            thead.appendChild(hr);
        }
        for (let i = 1; i < rows; i++) {
            const br = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                const td = document.createElement('td');
                td.innerHTML = '&#8203;';
                br.appendChild(td);
            }
            tbody.appendChild(br);
        }
        rangeToUse.deleteContents();
        const fragment = document.createDocumentFragment();
        fragment.appendChild(table);
        const pAfter = document.createElement('p');
        pAfter.innerHTML = '&#8203;';
        fragment.appendChild(pAfter);
        rangeToUse.insertNode(fragment);
        let firstCellToFocus = null;
        if (rows >= 1 && cols >= 1 && thead.firstChild && thead.firstChild.firstChild) {
            firstCellToFocus = thead.firstChild.firstChild;
        } else if (tbody.firstChild && tbody.firstChild.firstChild) {
            firstCellToFocus = tbody.firstChild.firstChild;
        }
        if (firstCellToFocus) {
            this._focusCell(firstCellToFocus);
            const row = this._findParentElement(firstCellToFocus, 'TR');
            this.currentTableSelectionInfo = { cell: firstCellToFocus, row: row, table: table, cellIndex: firstCellToFocus.cellIndex, rowIndex: row.rowIndex };
            this._showContextualTableToolbar(firstCellToFocus);
        } else {
            rangeToUse.setStart(pAfter, pAfter.childNodes.length > 0 ? 1 : 0);
            rangeToUse.collapse(true);
            selection.removeAllRanges();
            selection.addRange(rangeToUse);
        }
        this.savedRangeInfo = null;
        this._finalizeUpdate(this.editableArea.innerHTML);
    }
    _insertTableMarkdown(rows, cols) {
        if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
            console.error("Invalid rows or columns for Markdown table insertion.");
            return;
        }
        const textarea = this.markdownArea;
        let start, end;
        if (this.savedRangeInfo && typeof this.savedRangeInfo.start === 'number') {
            start = this.savedRangeInfo.start;
            end = this.savedRangeInfo.end;
        } else {
            start = textarea.selectionStart;
            end = textarea.selectionEnd;
        }
        let mdTable = "";
        const headerPlaceholders = [];
        if (rows >= 1) {
            mdTable += "|";
            for (let j = 0; j < cols; j++) {
                const placeholder = ` Cabeçalho ${j + 1} `;
                headerPlaceholders.push(placeholder.trim());
                mdTable += placeholder + "|";
            }
            mdTable += "\n";
            mdTable += "|";
            for (let j = 0; j < cols; j++) mdTable += " --- |";
            mdTable += "\n";
        }
        for (let i = 1; i < rows; i++) {
            mdTable += "|";
            for (let j = 0; j < cols; j++) mdTable += " Célula |";
            mdTable += "\n";
        }
        const textValue = textarea.value;
        let prefixNewline = "";
        if (start > 0 && textValue[start - 1] !== '\n') {
            prefixNewline = "\n\n";
        } else if (start > 0 && textValue.substring(start - 2, start) !== '\n\n' && textValue[start - 1] === '\n') {
            prefixNewline = "\n";
        }
        const textToInsert = prefixNewline + mdTable.trimEnd() + "\n\n";
        textarea.value = textValue.substring(0, start) + textToInsert + textValue.substring(end);
        if (headerPlaceholders.length > 0) {
            const firstPlaceholderText = headerPlaceholders[0];
            const placeholderRelativeStart = textToInsert.indexOf(firstPlaceholderText, prefixNewline.length);
            if (placeholderRelativeStart !== -1) {
                const selectionStart = start + prefixNewline.length + placeholderRelativeStart;
                const selectionEnd = selectionStart + firstPlaceholderText.length;
                textarea.setSelectionRange(selectionStart, selectionEnd);
            } else {
                const firstPipeAfterPrefix = textToInsert.indexOf('|', prefixNewline.length);
                const cursorPos = start + (firstPipeAfterPrefix !== -1 ? firstPipeAfterPrefix + 2 : prefixNewline.length);
                textarea.setSelectionRange(cursorPos, cursorPos);
            }
        } else {
            textarea.selectionStart = textarea.selectionEnd = start + textToInsert.length;
        }
        this.savedRangeInfo = null;
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
        }
    }
    _applyMarkdownListIndentInternal() {
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
        const indentStr = '  ';
        let charDiff = 0;
        let firstLineCharDiff = 0;
        const newLines = lines.map((line, index) => {
            if (line.trim().length > 0) {
                charDiff += indentStr.length;
                if (index === 0) firstLineCharDiff = indentStr.length;
                return indentStr + line;
            }
            return line;
        });
        const newAffectedText = newLines.join('\n');
        textarea.value = text.substring(0, lineStartIndex) + newAffectedText + text.substring(lineEndIndex);
        let newStart = start + (lines[0].trim().length > 0 ? firstLineCharDiff : 0);
        if (start === end && lines.length === 1 && lines[0].trim().length === 0) {
            newStart = start;
        }
        textarea.selectionStart = newStart;
        textarea.selectionEnd = end + charDiff;
        textarea.focus();
        this._finalizeUpdate(textarea.value);
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
        const indentChars = ['  ', '\t'];
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
            return line;
        });
        const newAffectedText = newLines.join('\n');
        textarea.value = text.substring(0, lineStartIndex) + newAffectedText + text.substring(lineEndIndex);
        let newStart = Math.max(lineStartIndex, start + firstLineCharDiff);
        if (start === end && lines.length === 1 && firstLineCharDiff === 0) {
            if (lines[0].trim().length === 0 || (!lines[0].startsWith(' ') && !lines[0].startsWith('\t'))) {
                newStart = start;
            }
        }
        textarea.selectionStart = newStart;
        textarea.selectionEnd = Math.max(newStart, end + charDiff);
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
        if (isCurrentlyActive && (buttonConfig.type === 'inline' || buttonConfig.type === 'block-wrap')) {
            let actualPrefixStart = textValue.lastIndexOf(prefix, start - prefix.length);
            if (start === end && actualPrefixStart !== -1 && start < actualPrefixStart + prefix.length) {
                actualPrefixStart = textValue.lastIndexOf(prefix, actualPrefixStart - 1);
            }
            if (start > 0 && textValue.substring(start - prefix.length, start) === prefix &&
                end < textValue.length && textValue.substring(end, end + suffix.length) === suffix &&
                selectedText.length > 0
            ) {
                textarea.value = textValue.substring(0, start - prefix.length) +
                    selectedText +
                    textValue.substring(end + suffix.length);
                newStart = start - prefix.length;
                newEnd = newStart + selectedText.length;
            } else if (actualPrefixStart !== -1 && actualPrefixStart + prefix.length <= start) {
                let actualSuffixStart = textValue.indexOf(suffix, end);
                if (actualSuffixStart !== -1 && end <= actualSuffixStart) {
                    const contentBetweenMarkers = textValue.substring(actualPrefixStart + prefix.length, actualSuffixStart);
                    textarea.value = textValue.substring(0, actualPrefixStart) +
                        contentBetweenMarkers +
                        textValue.substring(actualSuffixStart + suffix.length);
                    newStart = actualPrefixStart;
                    newEnd = actualPrefixStart + contentBetweenMarkers.length;
                } else {
                    return this._wrapMarkdownFormatting(buttonConfig, selectedText, start, end);
                }
            } else {
                return this._wrapMarkdownFormatting(buttonConfig, selectedText, start, end);
            }
        } else if (isCurrentlyActive && buttonConfig.type === 'block' && buttonConfig.mdPrefix) {
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
            } else {
                return this._wrapMarkdownFormatting(buttonConfig, selectedText, start, end);
            }
        }
        else {
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
        let placeholder = '';
        let cursorOffsetStart = prefix.length;
        let cursorOffsetEnd = prefix.length + (selectedText.length > 0 ? selectedText.length : 0);
        switch (buttonConfig.id) {
            case 'h1': placeholder = 'Cabeçalho 1'; break;
            case 'h2': placeholder = 'Cabeçalho 2'; break;
            case 'h3': placeholder = 'Cabeçalho 3'; break;
            case 'bold': placeholder = 'negrito'; break;
            case 'italic': placeholder = 'itálico'; break;
            case 'strikethrough': placeholder = 'riscado'; break;
            case 'link':
                const url = prompt("Insira a URL do link:", "https://");
                if (!url) return;
                prefix = '[';
                suffix = `](${url})`;
                placeholder = selectedText || 'texto do link';
                cursorOffsetStart = 1;
                cursorOffsetEnd = cursorOffsetStart + placeholder.length;
                selectedText = placeholder;
                break;
            case 'ul':
            case 'ol':
                placeholder = 'Item de lista';
                if (selectedText.includes('\n')) {
                    let count = 1;
                    replacementText = selectedText.split('\n').map(line => {
                        const itemPrefix = buttonConfig.id === 'ol' ? `${count++}. ` : '- ';
                        return itemPrefix + line;
                    }).join('\n');
                    cursorOffsetStart = 0;
                    cursorOffsetEnd = replacementText.length;
                } else {
                    let lineStartIdx = textarea.value.lastIndexOf('\n', start - 1) + 1;
                    if (start > 0 && textarea.value.charAt(start - 1) !== '\n' && start !== lineStartIdx) {
                        prefix = '\n' + (buttonConfig.id === 'ol' ? '1. ' : '- ');
                    } else {
                        prefix = (buttonConfig.id === 'ol' ? '1. ' : '- ');
                    }
                    cursorOffsetStart = prefix.length;
                    suffix = '';
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
                if (start > 0 && textarea.value[start - 1] !== '\n') prefix = '\n' + prefix;
                if (end < textarea.value.length && textarea.value[end] !== '\n' && (selectedText || placeholder).slice(-1) !== '\n') suffix = suffix + '\n';
                else if ((selectedText || placeholder).slice(-1) === '\n' && textarea.value[end] !== '\n' && end < textarea.value.length) {
                    suffix = suffix.substring(1) + '\n';
                }
                cursorOffsetStart = prefix.length;
                break;
            case 'inlinecode': placeholder = 'código'; break;
            default: return;
        }
        if (!replacementText) {
            const textToWrap = selectedText || placeholder;
            replacementText = prefix + textToWrap + suffix;
            if (!selectedText) {
                cursorOffsetEnd = cursorOffsetStart + placeholder.length;
            } else {
                cursorOffsetEnd = cursorOffsetStart + selectedText.length;
            }
        }
        textarea.value = textarea.value.substring(0, start) + replacementText + textarea.value.substring(end);
        if (selectedText.length > 0 && buttonConfig.id !== 'link') {
            if (buttonConfig.type === 'inline' || buttonConfig.type === 'block-wrap' || buttonConfig.id === 'link') {
                textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
            } else {
                textarea.setSelectionRange(start, start + replacementText.length);
            }
        } else {
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
                if (!currentText && selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    const linkTextNode = document.createTextNode("texto do link");
                    range.deleteContents();
                    range.insertNode(linkTextNode);
                    range.selectNodeContents(linkTextNode);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                document.execCommand('createLink', false, url);
                this._finalizeUpdate(this.editableArea.innerHTML);
            }
        } else {
            this._applyMarkdownFormatting(this.options.buttons.find(b => b.id === 'link'));
        }
    }
    _insertHorizontalRuleAction() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            document.execCommand('insertHorizontalRule', false, null);
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                let hrNode = range.startContainer;
                if (hrNode.nodeName !== 'HR') {
                    if (range.startContainer.childNodes && range.startOffset > 0 && range.startContainer.childNodes[range.startOffset - 1] && range.startContainer.childNodes[range.startOffset - 1].nodeName === "HR") {
                        hrNode = range.startContainer.childNodes[range.startOffset - 1];
                    } else if (range.startContainer.previousSibling && range.startContainer.previousSibling.nodeName === "HR") {
                        hrNode = range.startContainer.previousSibling;
                    } else {
                        const hrs = this.editableArea.getElementsByTagName('hr');
                        if (hrs.length > 0) hrNode = hrs[hrs.length - 1];
                    }
                }
                if (hrNode && hrNode.nodeName === 'HR') {
                    let nextEl = hrNode.nextElementSibling;
                    let ensureParagraphAfter = true;
                    if (nextEl && (nextEl.nodeName === 'P' || ['H1', 'H2', 'H3', 'UL', 'OL', 'BLOCKQUOTE', 'PRE', 'DIV', 'TABLE'].includes(nextEl.nodeName))) {
                        ensureParagraphAfter = false;
                    } else if (nextEl && nextEl.nodeName === 'BR') {
                        nextEl.remove();
                    }
                    if (ensureParagraphAfter) {
                        const pAfter = document.createElement('p');
                        pAfter.innerHTML = '&#8203;';
                        hrNode.parentNode.insertBefore(pAfter, hrNode.nextSibling);
                        range.setStart(pAfter, pAfter.childNodes.length > 0 ? 1 : 0);
                        range.collapse(true);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
            }
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else {
            this.markdownArea.focus();
            const textarea = this.markdownArea;
            const start = textarea.selectionStart;
            let textBefore = textarea.value.substring(0, start);
            let prefixNewline = "";
            if (start > 0 && textBefore.slice(-1) !== '\n') {
                prefixNewline = "\n\n";
            } else if (start > 0 && textBefore.slice(-2) !== '\n\n' && textBefore.slice(-1) === '\n') {
                prefixNewline = "\n";
            }
            const replacementText = prefixNewline + "---\n\n";
            textarea.value = textarea.value.substring(0, start) + replacementText + textarea.value.substring(textarea.selectionEnd);
            const newCursorPos = start + replacementText.length - 1;
            textarea.selectionStart = textarea.selectionEnd = newCursorPos;
            this._finalizeUpdate(textarea.value);
        }
    }
    _insertCodeBlock() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            const selection = window.getSelection();
            const initialSelectedText = selection.toString();
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = initialSelectedText || "código";
            pre.appendChild(code);
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.deleteContents();
                const fragment = document.createDocumentFragment();
                fragment.appendChild(pre);
                const pAfter = document.createElement('p');
                pAfter.innerHTML = '&#8203;';
                fragment.appendChild(pAfter);
                range.insertNode(fragment);
                const newRange = document.createRange();
                if (initialSelectedText.length > 0) {
                    newRange.setStart(pAfter.firstChild || pAfter, pAfter.firstChild ? pAfter.firstChild.length : 0);
                    newRange.collapse(true);
                } else {
                    newRange.selectNodeContents(code);
                }
                selection.removeAllRanges();
                selection.addRange(newRange);
            } else {
                this.editableArea.appendChild(pre);
                const pAfter = document.createElement('p');
                pAfter.innerHTML = '&#8203;';
                this.editableArea.appendChild(pAfter);
            }
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else {
            this._applyMarkdownFormatting(this.options.buttons.find(b => b.id === 'codeblock'));
        }
    }
    _insertInlineCode() {
        if (this.currentMode === 'wysiwyg') {
            this.editableArea.focus();
            const selection = window.getSelection();
            const initialSelectedText = selection.toString().trim();
            const code = document.createElement('code');
            code.textContent = initialSelectedText || "código";
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.deleteContents();
                range.insertNode(code);
                const spaceNode = document.createTextNode('\u200B');
                range.setStartAfter(code);
                range.insertNode(spaceNode);
                const newRange = document.createRange();
                if (initialSelectedText.length > 0) {
                    newRange.setStart(spaceNode, 1);
                    newRange.collapse(true);
                } else {
                    newRange.selectNodeContents(code);
                }
                selection.removeAllRanges();
                selection.addRange(newRange);
            } else {
                this.editableArea.appendChild(code);
                const spaceNode = document.createTextNode('\u200B');
                this.editableArea.appendChild(spaceNode);
            }
            this._finalizeUpdate(this.editableArea.innerHTML);
        } else {
            this._applyMarkdownFormatting(this.options.buttons.find(b => b.id === 'inlinecode'));
        }
    }
    _markdownToHtml(markdown) {
        if (typeof marked === 'undefined') {
            console.warn("marked.js library not found. Using basic Markdown to HTML conversion.");
            let html = markdown
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
            html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/~~(.*?)~~/g, '<s>$1</s>')
                .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                .replace(/```([\s\S]*?)```/g, (match, p1) => `<pre><code>${p1.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`)
                .replace(/`(.*?)`/g, (match, p1) => `<code>${p1.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`)
                .replace(/^\s*[-*+] (.*)/gim, '<ul><li>$1</li></ul>')
                .replace(/^\s*\d+\. (.*)/gim, '<ol><li>$1</li></ol>')
                .replace(/^> (.*)/gim, '<blockquote>$1</blockquote>')
                .replace(/^---\s*$/gim, '<hr>')
                .replace(/\n/g, '<br>');
            html = html.replace(/<\/ul>\s*<br\s*\/?>\s*<ul>/gi, '').replace(/<\/ol>\s*<br\s*\/?>\s*<ol>/gi, '');
            return html;
        }
        const markedOptions = {
            gfm: true,
            breaks: false,
            smartLists: true,
        };
        return marked.parse(markdown || '', markedOptions);
    }
    _htmlToMarkdown(elementOrHtml) {
        let tempDiv;
        if (typeof elementOrHtml === 'string') {
            tempDiv = document.createElement('div');
            tempDiv.innerHTML = elementOrHtml;
        } else {
            tempDiv = elementOrHtml.cloneNode(true);
        }
        tempDiv.innerHTML = tempDiv.innerHTML.replace(/\u200B/g, '');
        let markdown = '';
        this._normalizeNodes(tempDiv);
        Array.from(tempDiv.childNodes).forEach(child => {
            markdown += this._nodeToMarkdownRecursive(child);
        });
        markdown = markdown.replace(/\n\s*\n\s*\n+/g, '\n\n');
        markdown = markdown.replace(/ +\n/g, '\n');
        return markdown.trim();
    }
    _normalizeNodes(parentElement) {
        let currentNode = parentElement.firstChild;
        while (currentNode) {
            let nextNode = currentNode.nextSibling;
            if (currentNode.nodeType === Node.TEXT_NODE && nextNode && nextNode.nodeType === Node.TEXT_NODE) {
                currentNode.textContent += nextNode.textContent;
                parentElement.removeChild(nextNode);
                nextNode = currentNode.nextSibling;
            }
            else if (currentNode.nodeName === 'BR') {
                if (!nextNode || nextNode.nodeName === 'BR' || this._isBlockElement(nextNode)) {
                    const textNode = document.createTextNode('\n');
                    parentElement.insertBefore(textNode, currentNode);
                } else if (nextNode.nodeType === Node.TEXT_NODE && !nextNode.textContent.startsWith('\n')) {
                    nextNode.textContent = '\n' + nextNode.textContent;
                } else if (nextNode.nodeType === Node.ELEMENT_NODE && !this._isBlockElement(nextNode)) {
                    const textNode = document.createTextNode('\n');
                    parentElement.insertBefore(textNode, nextNode);
                }
                parentElement.removeChild(currentNode);
                currentNode = nextNode;
                continue;
            }
            if (currentNode && currentNode.childNodes && currentNode.childNodes.length > 0 && currentNode.nodeType === Node.ELEMENT_NODE) {
                this._normalizeNodes(currentNode);
            }
            currentNode = nextNode;
        }
    }
    _isBlockElement(node) {
        if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
        const blockElements = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'LI', 'BLOCKQUOTE', 'PRE', 'HR', 'TABLE', 'THEAD', 'TBODY', 'TR', 'DIV', 'IMG'];
        return blockElements.includes(node.nodeName);
    }
    _processInlineContainerRecursive(element, options = {}) {
        let markdown = '';
        Array.from(element.childNodes).forEach(child => {
            markdown += this._nodeToMarkdownRecursive(child, options);
        });
        return markdown;
    }
    _listToMarkdownRecursive(listNode, indent = "", listType = null, listCounter = 1, options = {}) {
        const LOG_PREFIX = `[List md${indent ? `|indent:'${indent}'` : ''}]`;
        let markdown = '';
        const isOrdered = listNode.nodeName === 'OL';
        Array.from(listNode.childNodes).forEach((childOfListNode, liIndex) => {
            if (childOfListNode.nodeName === 'LI') {
                const liNode = childOfListNode;
                const itemMarker = isOrdered ? `${listCounter}. ` : '- ';
                let listItemContent = '';
                let hasNestedListChild = false;
                Array.from(liNode.childNodes).forEach((contentNodeOfLi, contentIndex) => {
                    if (contentNodeOfLi.nodeName === 'UL' || contentNodeOfLi.nodeName === 'OL') {
                        hasNestedListChild = true;
                        const trimmedListItemContentSoFar = listItemContent.trimEnd();
                        if (trimmedListItemContentSoFar.length > 0 && !trimmedListItemContentSoFar.endsWith('\n')) {
                            listItemContent = trimmedListItemContentSoFar + '\n';
                        }
                        listItemContent += this._listToMarkdownRecursive(contentNodeOfLi, indent + '  ', contentNodeOfLi.nodeName, 1, options);
                    } else {
                        const nodeMd = this._nodeToMarkdownRecursive(contentNodeOfLi, options);
                        listItemContent += nodeMd;
                    }
                });
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
                if (isEffectivelyOnlyNestedList) {
                    const mdPiece = `${indent}${itemMarker.trimEnd()}\n` + listItemContent.trimEnd() + '\n';
                    markdown += mdPiece;
                } else {
                    const outputLines = [];
                    const lines = listItemContent.split('\n');
                    const firstActualTextLine = lines.shift() || "";
                    outputLines.push(`${indent}${itemMarker}${firstActualTextLine.trimEnd()}`);
                    const continuationIndent = indent + ' '.repeat(itemMarker.length);
                    const subListLinePattern = new RegExp(`^${(indent + '  ').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
                    lines.forEach((line, lineIdx) => {
                        if (subListLinePattern.test(line)) {
                            outputLines.push(line);
                        } else if (line.trim().length > 0) {
                            outputLines.push(continuationIndent + line.trimStart());
                        } else {
                            outputLines.push(continuationIndent + line);
                        }
                    });
                    let currentLiMarkdown;
                    if (outputLines.length === 1 && firstActualTextLine.trim().length === 0 && !hasNestedListChild) {
                        currentLiMarkdown = `${indent}${itemMarker.trimEnd()}\n`;
                    } else {
                        currentLiMarkdown = outputLines.join('\n').trimEnd() + '\n';
                    }
                    markdown += currentLiMarkdown;
                }
                if (isOrdered) listCounter++;
            } else if ((childOfListNode.nodeType === Node.TEXT_NODE && childOfListNode.textContent.trim().length > 0) ||
                (childOfListNode.nodeType === Node.ELEMENT_NODE && childOfListNode.nodeName !== 'SCRIPT' && childOfListNode.nodeName !== 'TEMPLATE')) {
                if (childOfListNode.nodeName === 'UL' || childOfListNode.nodeName === 'OL') {
                    markdown += this._listToMarkdownRecursive(childOfListNode, indent + '  ', childOfListNode.nodeName, 1, options);
                } else {
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
                        markdown += mdPiece;
                        if (isOrdered) listCounter++;
                    }
                }
            } else {
            }
        });
        return markdown;
    }
    _cellContentToMarkdown(cellNode) {
        let markdown = '';
        Array.from(cellNode.childNodes).forEach(child => {
            markdown += this._nodeToMarkdownRecursive(child, { inTableCell: true });
        });
        return markdown.trim().replace(/<br\s*\/?>/gi, ' <br> ');
    }
    _nodeToHtmlForTableCell(node) {
        const clone = node.cloneNode(true);
        const textWalker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT, null, false);
        let currentTextNode;
        while (currentTextNode = textWalker.nextNode()) {
            if (!this._findParentElement(currentTextNode, ['PRE', 'CODE'])) {
                currentTextNode.textContent = currentTextNode.textContent.replace(/\|/g, '\\|');
            }
        }
        const textNodesToProcessForNewline = [];
        const preCodeElements = Array.from(clone.querySelectorAll('pre, code'));
        const collectTextNodes = (currentNode) => {
            const isInPreCode = preCodeElements.some(pcElement => pcElement.contains(currentNode) && pcElement !== currentNode);
            if (currentNode.nodeType === Node.TEXT_NODE) {
                if (!isInPreCode && currentNode.textContent.includes('\n')) {
                    textNodesToProcessForNewline.push(currentNode);
                }
            } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
                if (currentNode.nodeName !== 'PRE' && currentNode.nodeName !== 'CODE') {
                    Array.from(currentNode.childNodes).forEach(collectTextNodes);
                }
            }
        };
        Array.from(clone.childNodes).forEach(collectTextNodes);
        for (let i = textNodesToProcessForNewline.length - 1; i >= 0; i--) {
            const tn = textNodesToProcessForNewline[i];
            if (tn.parentNode && tn.textContent.includes('\n')) {
                const fragments = tn.textContent.split('\n');
                const parent = tn.parentNode;
                if (parent) {
                    fragments.forEach((fragment, idx) => {
                        if (fragment.length > 0) parent.insertBefore(document.createTextNode(fragment), tn);
                        if (idx < fragments.length - 1) parent.insertBefore(document.createElement('br'), tn);
                    });
                    parent.removeChild(tn);
                }
            }
        }
        const tempSerializer = document.createElement('div');
        while (clone.firstChild) {
            tempSerializer.appendChild(clone.firstChild);
        }
        return tempSerializer.innerHTML;
    }
    _nodeToMarkdownRecursive(node, options = {}) {
        switch (node.nodeName) {
            case '#text':
                let text = node.textContent;
                if (options && options.inTableCell) {
                    text = text.replace(/\|/g, '\\|');
                    if (!this._findParentElement(node, 'PRE') && !this._findParentElement(node, 'CODE')) {
                        text = text.replace(/\n/g, '<br>');
                    }
                } else {
                    if (!this._findParentElement(node, 'PRE') && !this._findParentElement(node, 'CODE')) {
                        text = text.replace(/  +/g, ' ');
                    }
                }
                return text;
            case 'BR':
                return (options && options.inTableCell) ? '<br>' : '\n';
            case 'IMG':
                if (options && options.inTableCell) {
                    return node.outerHTML;
                }
                const imgSrc = node.getAttribute('src') || '';
                const imgAlt = node.getAttribute('alt') || '';
                return `![${imgAlt}](${imgSrc})\n\n`;
            case 'B': case 'STRONG': return `**${this._processInlineContainerRecursive(node, options).trim()}**`;
            case 'I': case 'EM': return `*${this._processInlineContainerRecursive(node, options).trim()}*`;
            case 'S': case 'DEL': case 'STRIKE': return `~~${this._processInlineContainerRecursive(node, options).trim()}~~`;
            case 'A':
                const href = node.getAttribute('href') || '';
                const linkText = this._processInlineContainerRecursive(node, options).trim();
                return `[${linkText}](${href})`;
            case 'CODE':
                if (!this._findParentElement(node, 'PRE')) {
                    let codeContent = node.textContent;
                    if (options && options.inTableCell) {
                        codeContent = codeContent.replace(/\|/g, '\\|');
                    }
                    return `\`${codeContent.trim()}\``;
                }
                return '';
            case 'P':
            case 'UL': case 'OL':
            case 'BLOCKQUOTE':
            case 'PRE':
            case 'H1': case 'H2': case 'H3': case 'H4': case 'H5': case 'H6':
            case 'HR':
            case 'DIV':
                if (options && options.inTableCell) {
                    return this._nodeToHtmlForTableCell(node);
                }
                if (node.nodeName === 'P') {
                    const pParent = node.parentNode;
                    const isInsideListItemOrBlockquote = pParent && (pParent.nodeName === 'LI' || pParent.nodeName === 'BLOCKQUOTE');
                    let pContent = this._processInlineContainerRecursive(node, options).trim();
                    if (isInsideListItemOrBlockquote) {
                        return pContent.replace(/\n\s*\n/g, '\n').trim() + (pContent ? '\n' : '');
                    }
                    return pContent ? `${pContent}\n\n` : '';
                }
                if (node.nodeName === 'UL' || node.nodeName === 'OL') {
                    let listMd = this._listToMarkdownRecursive(node, "", node.nodeName, 1, options);
                    if (listMd.trim().length > 0 && !listMd.endsWith('\n\n')) {
                        if (!listMd.endsWith('\n')) listMd += '\n';
                        listMd += '\n';
                    }
                    return listMd;
                }
                if (node.nodeName === 'BLOCKQUOTE') {
                    const quoteContentRaw = this._processInlineContainerRecursive(node, options);
                    const quoteLines = quoteContentRaw.split('\n').map(line => line.trim());
                    const nonEmptyLines = quoteLines.filter(line => line.length > 0);
                    return nonEmptyLines.map(line => `> ${line}`).join('\n') + (nonEmptyLines.length > 0 ? '\n\n' : '');
                }
                if (node.nodeName === 'PRE') {
                    if (node.firstChild && node.firstChild.nodeName === 'CODE') {
                        const codeElement = node.firstChild;
                        const langMatch = codeElement.className.match(/language-(\S+)/);
                        const lang = langMatch ? langMatch[1] : '';
                        let preContent = codeElement.textContent;
                        if (preContent.length > 0 && !preContent.endsWith('\n')) preContent += '\n';
                        return `\`\`\`${lang}\n${preContent}\`\`\`\n\n`;
                    }
                    let preTextContent = node.textContent;
                    if (preTextContent.length > 0 && !preTextContent.endsWith('\n')) preTextContent += '\n';
                    return `\`\`\`\n${preTextContent}\`\`\`\n\n`;
                }
                if (node.nodeName.match(/^H[1-6]$/)) {
                    return `${'#'.repeat(parseInt(node.nodeName[1]))} ${this._processInlineContainerRecursive(node, options).trim()}\n\n`;
                }
                if (node.nodeName === 'HR') {
                    return '\n---\n\n';
                }
                if (node.nodeName === 'DIV') {
                    const divContent = this._processInlineContainerRecursive(node, options).trim();
                    if (node.classList.contains('md-editable-area')) return divContent;
                    return divContent ? `${divContent}\n\n` : '';
                }
                break;
            case 'TABLE':
                let tableMarkdown = '';
                const tHeadNode = node.querySelector('thead');
                const tBodyNode = node.querySelector('tbody') || node;
                let colCount = 0;
                let headerMdContent = '';
                let bodyMdContent = '';
                if (tHeadNode) {
                    Array.from(tHeadNode.querySelectorAll('tr')).forEach(headerRowNode => {
                        const headerCells = Array.from(headerRowNode.querySelectorAll('th, td'))
                            .map(cell => this._cellContentToMarkdown(cell));
                        if (headerCells.length > 0) {
                            headerMdContent += `| ${headerCells.join(' | ')} |\n`;
                            if (colCount === 0) colCount = headerCells.length;
                        }
                    });
                }
                let firstTBodyRowUsedAsHeader = false;
                if (colCount === 0 && tBodyNode) {
                    const firstRow = tBodyNode.querySelector('tr');
                    if (firstRow) {
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
                if (colCount === 0 && tBodyNode) {
                    const firstDataRow = tBodyNode.querySelector('tr');
                    if (firstDataRow) {
                        colCount = firstDataRow.querySelectorAll('td, th').length;
                    }
                }
                if (colCount === 0 && headerMdContent.trim() === '') {
                    let fallbackContent = '';
                    Array.from(node.querySelectorAll('tr')).forEach(trNode => {
                        Array.from(trNode.querySelectorAll('th, td')).forEach(cellNode => {
                            fallbackContent += this._nodeToMarkdownRecursive(cellNode, { ...options, inTableCell: false });
                        });
                    });
                    return fallbackContent.trim() ? fallbackContent.trim() + '\n\n' : '';
                }
                tableMarkdown = headerMdContent;
                if (headerMdContent.trim() !== '' || colCount > 0) {
                    tableMarkdown += `|${' --- |'.repeat(colCount)}\n`;
                }
                Array.from(tBodyNode.querySelectorAll('tr')).forEach((bodyRowNode, index) => {
                    if (firstTBodyRowUsedAsHeader && index === 0) return;
                    const bodyCellsHtml = Array.from(bodyRowNode.querySelectorAll('td, th'));
                    let bodyCellsMd = bodyCellsHtml.map(cell => this._cellContentToMarkdown(cell));
                    const finalCells = [];
                    for (let k = 0; k < colCount; k++) {
                        finalCells.push(bodyCellsMd[k] || '');
                    }
                    bodyMdContent += `| ${finalCells.join(' | ')} |\n`;
                });
                tableMarkdown += bodyMdContent;
                return tableMarkdown.trim() ? tableMarkdown.trim() + '\n\n' : '';
            case 'LI':
                return this._processInlineContainerRecursive(node, options).trim();
            default:
                if (node.childNodes && node.childNodes.length > 0) {
                    return this._processInlineContainerRecursive(node, options);
                }
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
        this.markdownArea.value = markdown || '';
        if (this.currentMode === 'markdown') {
            this._updateMarkdownLineNumbers();
        }
        if (!this.isUpdatingFromUndoRedo && !isInitialSetup) {
            const currentContent = this.currentMode === 'wysiwyg' ? this.editableArea.innerHTML : this.markdownArea.value;
            this._pushToUndoStack(currentContent);
        } else if (isInitialSetup) {
            const currentContent = this.currentMode === 'wysiwyg' ? this.editableArea.innerHTML : this.markdownArea.value;
            this.undoStack = [currentContent];
            this.redoStack = [];
        }
        this._updateToolbarActiveStates();
    }
    _handleDragOver(event) {
        event.preventDefault();
        if (this.currentMode !== 'wysiwyg' || !this.editableArea) return;
        let filesBeingDragged = false;
        if (event.dataTransfer && event.dataTransfer.types) {
            for (let i = 0; i < event.dataTransfer.types.length; i++) {
                if (event.dataTransfer.types[i] === "Files") {
                    filesBeingDragged = true;
                    break;
                }
            }
        }
        if (filesBeingDragged) {
            event.dataTransfer.dropEffect = 'copy';
            this.editableArea.classList.add('drag-over');
        } else {
            event.dataTransfer.dropEffect = 'none';
            this.editableArea.classList.remove('drag-over');
        }
    }
    _handleDragLeave(event) {
        if (this.currentMode !== 'wysiwyg' || !this.editableArea) return;
        if (!event.relatedTarget || !this.editableArea.contains(event.relatedTarget)) {
            this.editableArea.classList.remove('drag-over');
        }
    }
    _handleDrop(event) {
        event.preventDefault();
        if (this.currentMode !== 'wysiwyg' || !this.editableArea) return;
        this.editableArea.classList.remove('drag-over');
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.editableArea.focus();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this._performInsertImage(e.target.result, file.name || 'image', event);
                    };
                    reader.onerror = (err) => {
                        console.error("Error reading file:", file.name, err);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
    }
    destroy() {
        this._hideHeadingMenu();
        if (this.headingMenu && this.headingMenu.parentNode) {
            this.headingMenu.parentNode.removeChild(this.headingMenu);
            this.headingMenu = null;
        }

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
        if (this._boundListeners.handleSelectionChange) {
            document.removeEventListener('selectionchange', this._boundListeners.handleSelectionChange);
        }
        if (this.toolbarButtonListeners) {
            this.toolbarButtonListeners.forEach(({ button, listener }) => {
                button.removeEventListener('click', listener);
            });
            this.toolbarButtonListeners = [];
        }
        if (this.editableArea) {
            this.editableArea.removeEventListener('input', this._boundListeners.onEditableAreaInput);
            this.editableArea.removeEventListener('keydown', this._boundListeners.onEditableAreaKeyDown);
            this.editableArea.removeEventListener('keyup', this._boundListeners.updateWysiwygToolbar);
            this.editableArea.removeEventListener('click', this._boundListeners.updateWysiwygToolbar);
            this.editableArea.removeEventListener('click', this._boundListeners.onEditableAreaClickForTable);
            this.editableArea.removeEventListener('focus', this._boundListeners.updateWysiwygToolbar);
            this.editableArea.removeEventListener('dragover', this._boundListeners.handleDragOver);
            this.editableArea.removeEventListener('dragleave', this._boundListeners.handleDragLeave);
            this.editableArea.removeEventListener('drop', this._boundListeners.handleDrop);
        }
        if (this.markdownArea) {
            this.markdownArea.removeEventListener('input', this._boundListeners.onMarkdownAreaInput);
            this.markdownArea.removeEventListener('keydown', this._boundListeners.onMarkdownAreaKeyDown);
            this.markdownArea.removeEventListener('keyup', this._boundListeners.updateMarkdownToolbar);
            this.markdownArea.removeEventListener('click', this._boundListeners.updateMarkdownToolbar);
            this.markdownArea.removeEventListener('focus', this._boundListeners.updateMarkdownToolbar);
            this.markdownArea.removeEventListener('scroll', this._boundListeners.syncScrollMarkdown);
        }
        if (this.wysiwygTabButton) {
            this.wysiwygTabButton.removeEventListener('click', this._boundListeners.onWysiwygTabClick);
        }
        if (this.markdownTabButton) {
            this.markdownTabButton.removeEventListener('click', this._boundListeners.onMarkdownTabClick);
        }
        if (this.hostElement) {
            this.hostElement.innerHTML = '';
        }
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