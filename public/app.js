function App() {

    let app_variable = 'app_variable';

    let callbackFromParent = (data) => {
        app_variable = data;
    }

    Button(callbackFromParent);

    Header(app_variable);

    Content(app_variable);

    Footer(app_variable);
}

function Header(props) {
    console.log('header props', props);

    NavBar(props);
}

function NavBar(props) {
    console.log('navbar props', props);
}

function Content(props) {
    console.log('content props', props);
}

function Footer(props) {
    console.log('footer props', props);
}

function Button(callback) {
    // data Button
    callback('data from child');

}

App();

// data luôn đi theo 1 chiều đồng bộ từ cha xuống con
// App.js là component root nên nếu đặt state tại app thì luôn luôn đúng -> chính là tư tưởng redux hay flux
