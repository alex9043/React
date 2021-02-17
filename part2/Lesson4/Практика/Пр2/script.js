class Option{
  constructor(height, width, bg, fontSize, textAlign){
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv() {
    let div = document.createElement('div');
    document.body.append(div);
    div.textContent = 'Hell to world!';
    div.style.height = this.height + 'px';
    div.style.width = this.width + 'px';
    div.style.backgroundColor = this.bg;
    div.style.fontSize = this.fontSize + 'px';
    div.style.textAlign = this.textAlign;
  }
}

const option = new Option(250, 1200, 'grey', 100, 'center');
option.createDiv();