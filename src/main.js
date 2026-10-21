import './style.css';
import { createIcons, Sparkles, Heart, ShieldCheck, Clock, MapPin, Phone, Calendar, ArrowRight, CheckCircle2, ChevronDown, Menu, X, Star, Award, MessageCircle, Check } from 'lucide';

// Lucide アイコン初期化
function initIcons() {
  createIcons({
    icons: {
      Sparkles,
      Heart,
      ShieldCheck,
      Clock,
      MapPin,
      Phone,
      Calendar,
      ArrowRight,
      CheckCircle2,
      ChevronDown,
      Menu,
      X,
      Star,
      Award,
      MessageCircle,
      Check
    }
  });
}
initIcons();

// モバイルメニューのトグル
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMenu(show) {
  if (show) {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
}
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => toggleMenu(false));
}
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

// FAQ アコーディオン
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-chevron');
    
    const isOpen = !content.classList.contains('hidden');
    
    // 全て閉じる
    document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.faq-chevron').forEach(i => i.classList.remove('rotate-180'));

    if (!isOpen) {
      content.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180');
    }
  });
});

// メニュータブ切り替え
const menuTabs = document.querySelectorAll('.menu-tab');
const menuGroups = document.querySelectorAll('.menu-group');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    menuTabs.forEach(t => {
      t.classList.remove('bg-[#b8935a]', 'text-white', 'shadow-md');
      t.classList.add('bg-white', 'text-[#38332E]');
    });

    tab.classList.remove('bg-white', 'text-[#38332E]');
    tab.classList.add('bg-[#b8935a]', 'text-white', 'shadow-md');

    menuGroups.forEach(group => {
      if (target === 'all' || group.dataset.category === target) {
        group.classList.remove('hidden');
      } else {
        group.classList.add('hidden');
      }
    });
  });
});

// 準備中案内モーダル機能
const reservationModal = document.getElementById('reservation-modal');
const openModalBtns = document.querySelectorAll('.open-reservation-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const closeModalBtnSub = document.getElementById('close-modal-btn-sub');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (reservationModal) {
      reservationModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });
});

[closeModalBtn, closeModalBtnSub].forEach(btn => {
  if (btn) {
    btn.addEventListener('click', () => {
      if (reservationModal) {
        reservationModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
});

if (reservationModal) {
  reservationModal.addEventListener('click', (e) => {
    if (e.target === reservationModal) {
      reservationModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}
