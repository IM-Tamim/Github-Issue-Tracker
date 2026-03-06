const cardContainer = document.getElementById('card-container')

async function loadCards() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json()
    data.data.forEach(data => {
        const card = document.createElement('div');
        card.innerHTML =`
        <div class="border-2 border-gray-200 border-t-4 rounded-lg p-4 shadow-xl h-full flex flex-col ${data.status === 'open' ? 'border-t-green-500' : 'border-t-purple-500'}">
          <div class="flex justify-between">
              <span class="text-gray-400">
                <img src="./assets/${data.status === 'open' ? 'Open-Status' : 'Closed-Status'}.png" alt="">
              </span>
              <span class="text-xs font-medium px-6 py-1 rounded-full uppercase ${
                  data.priority === 'high' ? 'text-red-600 bg-red-100' : 
                  data.priority === 'medium' ? 'text-yellow-600 bg-yellow-100' : 'text-gray-600 bg-gray-100'
                }">${data.priority}</span>
          </div>
          
          <h3 class="font-semibold mt-2">${data.title}</h3>
          <p class="text-sm text-gray-600 mt-1 line-clamp-2">${data.description}</p>
          
          <div class="flex flex-wrap gap-2 mt-3">
              ${data.labels.map(label => `<span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 
                rounded-full">${label}</span>`).join('')}
          </div>
          <hr class="text-gray-200 my-4" />
          <div class="flex justify-between text-[0.6rem] text-gray-400">
            <div class="space-y-1">
              <p>#${data.id} by ${data.author}</p>
              <p>assignee: ${data.assignee}</p>
            </div>
            <div class="text-right space-y-1">
              <p>Credited: ${new Date(data.createdAt).toLocaleDateString()}</p>
              <p>Updated: ${new Date(data.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        `
        cardContainer.appendChild(card);
    });
}
loadCards()