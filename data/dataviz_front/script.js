// Données des statistiques
const stats = {
  totalGames: 95,
  wins: 46,
  losses: 45,
  ties: 4,
  winrate: 48.42,
  
  roleDistribution: {
    DEF: 71,
    ATK: 24
  },
  
  winrateByRole: {
    DEF: 47.89,
    ATK: 50.00
  },
  
  goalsByRole: {
    DEF: 2.51,
    ATK: 2.71,
    overall: 2.56
  },
  
  totalGoals: 243,
  totalSaves: 501,
  avgSaves: 5.27
};

// 1. GRAPHIQUE : Répartition Victoires/Défaites/Nuls
const ctx1 = document.getElementById('winLossChart').getContext('2d');
const winLossChart = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ['Victoires', 'Défaites', 'Matchs nuls'],
    datasets: [{
      data: [stats.wins, stats.losses, stats.ties],
      backgroundColor: [
        '#4CAF50',  // Vert pour victoires
        '#F44336',  // Rouge pour défaites
        '#FFC107'   // Jaune pour nuls
      ],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Répartition des résultats',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const percentage = ((value / stats.totalGames) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  }
});

// 2. GRAPHIQUE : Répartition des rôles
const ctx2 = document.getElementById('roleDistributionChart').getContext('2d');
const roleDistributionChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Défense (DEF)', 'Attaque (ATK)'],
    datasets: [{
      data: [stats.roleDistribution.DEF, stats.roleDistribution.ATK],
      backgroundColor: [
        '#2196F3',  // Bleu pour défense
        '#FF5722'   // Orange pour attaque
      ],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Répartition des rôles',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const percentage = ((value / stats.totalGames) * 100).toFixed(1);
            return `${label}: ${value} parties (${percentage}%)`;
          }
        }
      }
    }
  }
});

// 3. GRAPHIQUE : Winrate par rôle (Barres)
const ctx3 = document.getElementById('winrateByRoleChart').getContext('2d');
const winrateByRoleChart = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Défense (DEF)', 'Attaque (ATK)', 'Global'],
    datasets: [{
      label: 'Winrate (%)',
      data: [stats.winrateByRole.DEF, stats.winrateByRole.ATK, stats.winrate],
      backgroundColor: [
        '#2196F3',
        '#FF5722',
        '#9C27B0'
      ],
      borderColor: [
        '#1976D2',
        '#E64A19',
        '#7B1FA2'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Winrate par rôle',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Winrate: ${context.parsed.y.toFixed(2)}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        },
        title: {
          display: true,
          text: 'Pourcentage de victoires'
        }
      }
    }
  }
});

// 4. GRAPHIQUE : Buts moyens par partie et par rôle
const ctx4 = document.getElementById('goalsChart').getContext('2d');
const goalsChart = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['Défense (DEF)', 'Attaque (ATK)', 'Moyenne globale'],
    datasets: [{
      label: 'Buts moyens par partie',
      data: [stats.goalsByRole.DEF, stats.goalsByRole.ATK, stats.goalsByRole.overall],
      backgroundColor: [
        'rgba(33, 150, 243, 0.7)',
        'rgba(255, 87, 34, 0.7)',
        'rgba(156, 39, 176, 0.7)'
      ],
      borderColor: [
        '#1976D2',
        '#E64A19',
        '#7B1FA2'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Efficacité offensive par rôle',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y.toFixed(2)} buts/partie`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Buts par partie'
        }
      }
    }
  }
});

// 5. GRAPHIQUE : Comparaison performance globale (Radar)
const ctx5 = document.getElementById('performanceRadarChart').getContext('2d');
const performanceRadarChart = new Chart(ctx5, {
  type: 'radar',
  data: {
    labels: ['Winrate DEF', 'Winrate ATK', 'Buts DEF', 'Buts ATK', 'Arrêts'],
    datasets: [{
      label: 'Performance normalisée',
      data: [
        stats.winrateByRole.DEF,
        stats.winrateByRole.ATK,
        (stats.goalsByRole.DEF / 10) * 100,  // Normalisé sur 100
        (stats.goalsByRole.ATK / 10) * 100,  // Normalisé sur 100
        (stats.avgSaves / 10) * 100          // Normalisé sur 100
      ],
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      borderColor: '#4CAF50',
      borderWidth: 2,
      pointBackgroundColor: '#4CAF50',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Profil de performance global',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        }
      }
    }
  }
});

// 6. GRAPHIQUE : Statistiques comparatives (Barres horizontales)
const ctx6 = document.getElementById('comparisonChart').getContext('2d');
const comparisonChart = new Chart(ctx6, {
  type: 'horizontalBar',
  data: {
    labels: ['Parties en DEF', 'Parties en ATK', 'Victoires', 'Défaites'],
    datasets: [{
      label: 'Nombre',
      data: [stats.roleDistribution.DEF, stats.roleDistribution.ATK, stats.wins, stats.losses],
      backgroundColor: [
        '#2196F3',
        '#FF5722',
        '#4CAF50',
        '#F44336'
      ],
      borderColor: [
        '#1976D2',
        '#E64A19',
        '#388E3C',
        '#D32F2F'
      ],
      borderWidth: 2
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Vue d\'ensemble des statistiques',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
});

console.log('📊 Tous les graphiques ont été générés avec succès !');
