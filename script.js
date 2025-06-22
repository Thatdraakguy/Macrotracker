<script>
  function showPage(pageId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
      section.style.display = (section.id === pageId) ? 'block' : 'none';

      // Also re-render when navigating to habits or settings
      if (section.id === pageId && pageId === "habitsPage") renderHabits();
      if (section.id === pageId && pageId === "settingsPage") renderHabitSettings();
    });
  }

  const habitForm = document.getElementById("habitForm");
  const habitNameInput = document.getElementById("habitName");
  const habitColorInput = document.getElementById("habitColor");
  const habitGrid = document.getElementById("habitGrid");
  const habitListSettings = document.getElementById("habitListSettings");

  function loadHabits() {
    return JSON.parse(localStorage.getItem("habits")) || [];
  }

  function saveHabits(habits) {
    localStorage.setItem("habits", JSON.stringify(habits));
  }

  function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      days.push(date.toISOString().split("T")[0]);
    }
    return days;
  }

  function renderHabits() {
    const habits = loadHabits();
    const days = getLast7Days();
    habitGrid.innerHTML = "";

    habits.forEach((habit, i) => {
      const row = document.createElement("div");
      row.className = "habit-row";
      row.style.setProperty("--color", habit.color);

      const label = document.createElement("div");
      label.className = "habit-label";
      label.textContent = habit.name;
      row.appendChild(label);

      days.forEach(day => {
        const box = document.createElement("div");
        box.className = "day-box";
        if (habit.history?.[day]) box.classList.add("checked");
        box.onclick = () => {
          habit.history = habit.history || {};
          habit.history[day] = !habit.history[day];
          saveHabits(habits);
          renderHabits();
        };
        row.appendChild(box);
      });

      habitGrid.appendChild(row);
    });
  }

  function renderHabitSettings() {
    const habits = loadHabits();
    habitListSettings.innerHTML = "";

    habits.forEach((habit, index) => {
      const li = document.createElement("li");
      li.textContent = `${habit.name} (${habit.color})`;
      const del = document.createElement("button");
      del.textContent = "✖";
      del.onclick = () => {
        habits.splice(index, 1);
        saveHabits(habits);
        renderHabitSettings();
        renderHabits();
      };
      li.appendChild(del);
      habitListSettings.appendChild(li);
    });
  }

  habitForm.onsubmit = e => {
    e.preventDefault();
    const habits = loadHabits();
    const name = habitNameInput.value.trim();
    const color = habitColorInput.value;
    if (!name) return;
    habits.push({ name, color, history: {} });
    saveHabits(habits);
    habitNameInput.value = "";
    renderHabitSettings();
    renderHabits();
  };

  window.addEventListener("DOMContentLoaded", () => {
    showPage("dashboardPage");
    renderHabitSettings();
    renderHabits();
  });
</script>
