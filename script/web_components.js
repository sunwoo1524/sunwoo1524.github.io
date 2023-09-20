class PostLink extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        const container = document.createElement("a");
        const thumbnail = document.createElement("img");
        const content = document.createElement("div");
        const style = document.createElement("style");
        const title = document.createElement("h1");
        const description = document.createElement("p");

        const title_text = this.getAttribute("title");
        const description_text = this.getAttribute("description");
        const link = this.getAttribute("link");
        const thumbnail_src = this.getAttribute("thumbnail");

        container.className = "container";
        container.href = link;
        container.target = "_blank";

        title.innerText = title_text;
        description.innerText = description_text;

        content.className = "content";
        content.append(title, description);

        thumbnail.src = thumbnail_src;

        style.textContent = `
        .container {
            display: flex;
            width: 100%;
            height: 100px;
            margin: 10px 0;
            text-decoration: none;
        }

        .container img {
            width: 100px;
            height: 100px;
            border-radius: 10px 0 0 10px;
        }

        .container .content {
            display: flex;
            flex-direction: column;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border-radius: 0 10px 10px 0;
            width: 100%;
        }

        .container .content h1 {
            margin: 0;
            font-size: 17px;
            margin-bottom: 5px;
        }

        .container .content p {
            margin: 0;
            font-size: 14px;
        }
        `

        container.append(thumbnail, content, style);

        this.shadowRoot.append(container);
    }
}

customElements.define("post-link", PostLink);