// 图片预览
// 属性
// 1. 容器元素 2. 阴影元素 3. 内容元素
// 构造器 初始化事件
// 方法
// 打开图片
// 关闭图片
class PreviewImage {
    constructor() {
        this.container = document.querySelector('.preview-image-simple')
        this.shade = this.container.querySelector('.preview-image-shade');
        this.content = this.container.querySelector('.preview-image-content');
        this.bind();
    }
    open(src) {
        this.content.src = src;
        this.container.classList.remove('hide');
        this.container.classList.add('show');
    }
    close() {
        this.content.src = '#';
        this.container.classList.remove('show');
        this.container.classList.add('hide');
    }
    bind() {
        this.shade.addEventListener('click', e => {
            this.close();
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
    }
}




