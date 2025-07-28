document.getElementById('resumeForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const jobRole = document.getElementById('jobRole').value;
    const skills = document.getElementById('skills').value;

    try {
        const response = await fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jobRole, skills })
        });
        const templates = await response.json();
        displayTemplates(templates);
    } catch (error) {
        console.error('Error fetching templates:', error);
    }
});

function displayTemplates(templates) {
    const templateList = document.getElementById('templateList');
    templateList.classList.remove('hidden');
    const templateContainer = templateList.querySelector('.grid');
    templateContainer.innerHTML = '';

    templates.forEach(template => {
        const templateDiv = document.createElement('div');
        templateDiv.className = 'bg-white p-4 shadow rounded-lg';
        templateDiv.innerHTML = `
            <h4 class="font-bold text-lg">${template.name}</h4>
            <p>${template.description}</p>
            <button class="mt-2 bg-[#2A9D8F] text-white py-1 px-3 rounded hover:bg-[#264653]">Customize</button>
        `;
        templateContainer.appendChild(templateDiv);
    });
}