// Auto-generated entrypoint for Cloudflare Worker


const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResumeCraft AI</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body class="bg-gray-50">
    <header class="bg-[#264653] text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-QQtzG17rT76EI2JnN0ebVmUM.png?st=2025-07-28T01%3A30%3A08Z&se=2025-07-28T03%3A30%3A08Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T21%3A23%3A48Z&ske=2025-07-28T21%3A23%3A48Z&sks=b&skv=2024-08-04&sig=lQO1jZNEh0XJBdz7pcuGtAgfHQuWx0FZfl83unNDGsU%3D" alt="ResumeCraft AI Logo" class="h-10">
                <h1 class="text-2xl font-bold">ResumeCraft AI</h1>
            </div>
            <p class="text-lg">Craft Your Perfect Resume with AI Precision</p>
        </div>
    </header>
    <main class="container mx-auto mt-8 px-4">
        <section class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold text-[#2A9D8F] mb-4">Create Your Resume</h2>
            <form id="resumeForm" class="space-y-4">
                <div>
                    <label for="jobRole" class="block text-sm font-medium text-gray-700">Job Role</label>
                    <input type="text" id="jobRole" name="jobRole" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#2A9D8F] focus:ring focus:ring-[#2A9D8F] focus:ring-opacity-50">
                </div>
                <div>
                    <label for="skills" class="block text-sm font-medium text-gray-700">Skills</label>
                    <input type="text" id="skills" name="skills" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#2A9D8F] focus:ring focus:ring-[#2A9D8F] focus:ring-opacity-50">
                </div>
                <button type="submit" class="bg-[#E9C46A] text-white font-bold py-2 px-4 rounded hover:bg-[#F4A261]">Generate Resume</button>
            </form>
            <div id="templateList" class="mt-6 hidden">
                <h3 class="text-xl font-semibold text-[#2A9D8F]">Suggested Templates</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <!-- Templates will be injected here -->
                </div>
            </div>
        </section>
    </main>
    <footer class="bg-[#264653] text-white p-4 mt-8">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 ResumeCraft AI. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
const STYLE_CSS = `/* TailwindCSS used for styling, additional custom styles can be added if necessary */`;
const SCRIPT_JS = `document.getElementById('resumeForm').addEventListener('submit', async function (e) {
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
        templateDiv.innerHTML = \`
            <h4 class="font-bold text-lg">\${template.name}</h4>
            <p>\${template.description}</p>
            <button class="mt-2 bg-[#2A9D8F] text-white py-1 px-3 rounded hover:bg-[#264653]">Customize</button>
        \`;
        templateContainer.appendChild(templateDiv);
    });
}`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    return new Response('Not found', { status: 404 });
  }
};
