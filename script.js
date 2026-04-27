// Данные команд: меняй только цифры здесь
const teams = [
    { name: "Real Madrid", win: 3, draw: 1, loss: 0 },
    { name: "Man City", win: 2, draw: 0, loss: 2 },
    { name: "Liverpool", win: 2, draw: 1, loss: 1 },
    { name: "PSG", win: 0, draw: 2, loss: 2 }
];

// Функция переключения вкладок
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Рендеринг таблицы с авто-подсчетом
function renderTable() {
    const tableBody = document.querySelector('#league-table tbody');
    
    // Считаем очки и сортируем
    const sortedTeams = teams.map(team => ({
        ...team,
        played: team.win + team.draw + team.loss,
        points: (team.win * 3) + (team.draw * 1)
    })).sort((a, b) => b.points - a.points);

    tableBody.innerHTML = sortedTeams.map((team, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${team.name}</strong></td>
            <td>${team.played}</td>
            <td>${team.win}</td>
            <td>${team.draw}</td>
            <td>${team.loss}</td>
            <td style="color: #00ff88; font-weight: bold;">${team.points}</td>
        </tr>
    `).join('');
}

// Запуск при загрузке
window.onload = renderTable;
