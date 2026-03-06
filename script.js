const cardContainer = document.getElementById('card-container')

async function loadCards() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json()
    data.data.forEach(data => {
        const card = document.createElement('div');
        card.innerHTML =`
        <div class="border-1 border-gray-200 border-t-4 border-t-green-500 rounded-lg p-4 shadow-xl h-full">
          <div class="flex justify-between">
              <span class="text-gray-400"><img src="./assets/Open-Status.png" alt=""></span>
              <span class="text-xs font-medium text-red-600 bg-red-100 px-6 py-1 rounded-full">${data.priority}</span>
          </div>
          
          <h3 class="font-semibold mt-2">${data.title}</h3>
          <p class="text-sm text-gray-600 mt-1 line-clamp-2">${data.description}</p>
          
          <div class="flex gap-2 mt-3">
              <span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full"><i class="fa-solid fa-bug"></i> BUG</span>
              <span class="text-xs bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full"><i class="fa-regular fa-life-ring"></i> HELP WANTED</span>
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