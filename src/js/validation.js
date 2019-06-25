export default function validation(arr)
{
    const input = document.getElementById('myInput');
    const form = document.getElementById('form_country');
    const errorspan = document.getElementById('error_sp');

    form.addEventListener('submit', (e) => {
        let messages = []
        let cnt = 0;
        for(let i = 0; i < arr.length; i++){
            if (input.value == arr[i])
            {
                cnt++;
            }
        }
        if (cnt===0){
            messages.push('Not yet implemented country');
        }
        else {
            sessionStorage.setItem('country', input.value);
        }
        if (messages.length > 0) {
            e.preventDefault();
            errorspan.textContent = messages.join();
        }
    });
}