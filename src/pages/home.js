const Home = () => {
    const view = `
    <div class="card">
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
            </div>
        </div>
        <div class="card__content">
            <section class="image">
                <img src="" alt="">
            </section>
            <section class="text">
                <h2>name</h2>
                <p>description</p>
                <p>price</p>
            </section>
        </div>
    </div>
    `;
    return view;
}

export default Home;