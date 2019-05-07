using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Text.RegularExpressions;


namespace football
{
    public partial class App : Form
    {
        Auth authForm;

        int rowCount;
        int colCount;

        int winnersCount;
        string mostPointsWinner;
        List<string> zeroWinners;

        string winCode = "3";
        string drawnCode = "1";
        string lossCode = "0";

        public App(Auth authForm)
        {
            this.authForm = authForm;
            InitializeComponent();
        }

        private void App_Load(object sender, EventArgs e)
        {
            currentDate.Text = DateTime.Today.ToShortDateString();

            openFileDialog.Filter = "Text files(*.txt)|*.txt";
            saveFileDialog.Filter = "Text files(*.txt)|*.txt";
        }

        private void App_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.authForm.Close();
        }

        private void createGrid_Click(object sender, EventArgs e)
        {
            this.rowCount = (int)teamsCount.Value;
            this.colCount = (int)gamesCount.Value;

            dataGridView.RowCount = rowCount;
            dataGridView.ColumnCount = colCount;

            // set rows titles
            for (int i = 0; i < this.rowCount; i += 1)
            {
                dataGridView.Rows[i].HeaderCell.Value = $"Команда {i + 1}";
            }

            // set colls titles
            for (int i = 0; i < this.colCount; i += 1)
            {
                dataGridView.Columns[i].HeaderCell.Value = $"Матч {i + 1}";
            }
        }

        private void findWinnersCountBtn_Click(object sender, EventArgs e)
        {
            this.winnersCount = 0;

            for (int i = 0; i < this.rowCount; i += 1)
            {
                int winCount = 0;
                int lossCount = 0;
                for (int j = 0; j < this.colCount; j += 1)
                {
                    string cellValue = dataGridView.Rows[i].Cells[j].Value.ToString();
                    if (cellValue == this.winCode)
                    {
                        winCount += 1;
                    }

                    if (cellValue == this.lossCode)
                    {
                        lossCount += 1;
                    }
                }

                if (winCount > lossCount)
                {
                    this.winnersCount += 1;
                }
            }

            MessageBox.Show($"Кол-во: {this.winnersCount}");
        }

        private void findMostPointsWinnerBtn_Click(object sender, EventArgs e)
        {
            this.mostPointsWinner = "Команда 1";

            int mostPoints = 0;
            for (int i = 0; i < rowCount; i += 1)
            {
                int points = 0;
                for (int j = 0; j < colCount; j += 1)
                {
                    points += Convert.ToInt16(dataGridView.Rows[i].Cells[j].Value);
                }

                if (mostPoints < points)
                {
                    mostPoints = points;
                    this.mostPointsWinner = $"Команда {i + 1}";
                }
            }

            MessageBox.Show($"{this.mostPointsWinner} набрала больше всего очков");
        }

        private void findZeroWinnerBtn_Click(object sender, EventArgs e)
        {
            this.zeroWinners = new List<string> { };

            for (int i = 0; i < this.rowCount; i += 1)
            {
                int lossCount = 0;
                for (int j = 0; j < this.colCount; j += 1)
                {
                    if (this.lossCode == dataGridView.Rows[i].Cells[j].Value.ToString())
                    {
                        lossCount += 1;
                    }
                }

                if (lossCount == 0)
                {
                    this.zeroWinners.Add($"Команда {i + 1}");
                }
            }

            if (this.zeroWinners.Count == 0)
            {
                MessageBox.Show("Нет таких команд");
            }
            else
            {
                MessageBox.Show($"{String.Join(", ", this.zeroWinners.ToArray())} победили без поражений");
            }
        }
    }
}
