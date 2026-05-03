import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

interface Expense {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  expenses: Expense[] = [];
  
  // Form modülleri
  expenseName: string = '';
  expenseAmount: number | null = null;
  expenseCategory: string = '';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadExpenses();
  }

  // LocalStorage'dan verileri çekme
  loadExpenses() {
    const saved = localStorage.getItem('expenses');
    if (saved) {
      this.expenses = JSON.parse(saved);
    }
  }

  // LocalStorage'a kaydetme
  saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

  // Harcama Ekleme (Boş veri kontrolü ve Toast bonusu dahil)
  async addExpense() {
    if (!this.expenseName || !this.expenseAmount || !this.expenseCategory) {
      this.showToast('Lütfen tüm alanları doldurun!', 'danger');
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      name: this.expenseName,
      amount: this.expenseAmount,
      category: this.expenseCategory,
      date: new Date().toLocaleDateString('tr-TR') // Tarih bonusu
    };

    this.expenses.push(newExpense);
    this.saveExpenses();
    this.showToast('Harcama başarıyla eklendi!', 'success');

    // Formu temizle
    this.expenseName = '';
    this.expenseAmount = null;
    this.expenseCategory = '';
  }

  // Silme Onayı (Alert bonusu)
  async confirmDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Emin misiniz?',
      message: 'Bu harcamayı silmek istediğinize emin misiniz?',
      buttons: [
        {
          text: 'İptal',
          role: 'cancel',
        },
        {
          text: 'Sil',
          role: 'destructive',
          handler: () => {
            this.deleteExpense(id);
          }
        }
      ]
    });

    await alert.present();
  }

  // Silme İşlemi
  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(exp => exp.id !== id);
    this.saveExpenses();
    this.showToast('Harcama silindi.', 'warning');
  }

  // Dinamik Toplam Hesaplama
  getTotal(): number {
    return this.expenses.reduce((total, exp) => total + exp.amount, 0);
  }

  // Kategoriye Göre Renk (Bonus)
  getCategoryColor(category: string): string {
    switch(category) {
      case 'Market': return 'success';
      case 'Ulaşım': return 'tertiary';
      case 'Fatura': return 'warning';
      case 'Eğlence': return 'secondary';
      default: return 'medium';
    }
  }

  // Toast Mesajı Gösterme
  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }
}