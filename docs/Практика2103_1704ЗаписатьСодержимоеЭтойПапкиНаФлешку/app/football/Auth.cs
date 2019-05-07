using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace football
{
    public partial class Auth : Form
    {
        string user;
        public Auth()
        {
            InitializeComponent();
        }

        private void loginBtn_Click(object sender, EventArgs e)
        {
            string login = loginInput.Text;
            string password = passwordInput.Text;

            if (login != "" && password == "root")
            {
                this.user = login;
                App app = new App(this);
                app.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Неверные логин либо пароль!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            }
        }
    }
}
