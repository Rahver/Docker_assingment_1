document.getElementById('fetch-data').addEventListener('click', () => {
    // Simulate fetching data from an API
    const data = { message: 'Hello, Professor, This is Rahul Verma - G23AI2039, made this sample web app to run on docker by creating a docker image' };

    // Display the data in the data-output div
    document.getElementById('data-output').innerText = data.message;
});
