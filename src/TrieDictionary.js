export class TrieNode {
    constructor() {
        this.children = [];
        this.isEnd = false;
        for (let i = 0; i < 26; i++) {
            this.children.push(null)
        }
    }
}

export class TrieDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    insertHelper(word) {
        console.log("here1");
        let currNode = this.root;
        let currChar;
        let index;
        let length = word.length;
        for (let i = 0; i < length; i++) {
            currChar = word.charAt(i);
            index = currChar.charCodeAt(0) - 'a'.charCodeAt(0);
            if (currNode.children[index] == null) {
                currNode.children[index] = new TrieNode();
            }
            currNode = currNode.children[index];
            if (i == length - 1) {
                currNode.isEnd = true;
            }
        }
    }

    insert(words) {
        let length = words.length;
        for (let i = 0; i < length; i++) {
            this.insertHelper(words[i])
        }
    }

    exists(word) {
        let currNode = this.root;
        let currChar;
        let index;
        for (let i = 0; i < word.length; i++) {
            currChar = word.charAt(i);
            index = currChar.charCodeAt(0) - 'a'.charCodeAt(0);
            if (currNode.children[index] == null) {
                return 0;
            }
            currNode = currNode.children[index];
            if (i == word.length - 1) {
                if (currNode.isEnd == true) {
                    return 2;
                } else {
                    return 1;
                }
            }
        }
        return 0;
    }

    printTrie() {
        for (let i = 0; i < 26; i++) {
            if (this.root.children[i] != null) {
                this.printHelper(this.root.children[i], String.fromCharCode('a'.charCodeAt(0) + i));
            }
        }
    }

    printHelper(node, word) {
        if (node.isEnd == true) {
            console.log(word);
        }
        for (let i = 0; i < 26; i++) {
            if (node.children[i] != null) {
                this.printHelper(node.children[i], word + String.fromCharCode('a'.charCodeAt(0) + i));
            }
        }
    }

    fill() {
        fetch('AllWords.txt').then(response => response.text()).then(text => this.fillHelper(text));
    }

    fillHelper(text) {
        let words = [];
        console.log(text);
        console.log(words);
        words = text.split("\n");
        console.log(words);
        this.insert(words);
    }
}