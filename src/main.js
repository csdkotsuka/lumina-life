import './style.css';
import { createIcons, Sparkles, Heart, ShieldCheck, Clock, MapPin, Phone, Calendar, ArrowRight, CheckCircle2, ChevronDown, Menu, X, Star, Award, MessageCircle, Check } from 'lucide';
import { logoSamples } from './logos.js';

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

// ==========================================
// ロゴサンプルのプレビュー & 切り替えシステム
// ==========================================
let currentSelectedLogoId = 'combo-basic-gold';
let isDarkThemePreview = false;
let currentMotifFilter = 'all';

const headerLogoContainer = document.getElementById('header-logo-container');
const footerLogoContainer = document.getElementById('footer-logo-container');
const logoGalleryContainer = document.getElementById('logo-gallery-container');
const themeToggleBtn = document.getElementById('logo-theme-toggle');
const filterBtns = document.querySelectorAll('.logo-filter-btn');

function renderHeaderAndFooterLogos() {
  const currentLogo = logoSamples.find(s => s.id === currentSelectedLogoId) || logoSamples[0];
  if (headerLogoContainer) {
    headerLogoContainer.innerHTML = currentLogo.getSvg(false);
  }
  if (footerLogoContainer) {
    footerLogoContainer.innerHTML = currentLogo.getSvg(true);
  }
}

function renderLogoGallery() {
  if (!logoGalleryContainer) return;

  const filteredSamples = logoSamples.filter(sample => {
    if (currentMotifFilter === 'all') return true;
    if (currentMotifFilter === 'gold') return sample.color === 'gold';
    if (currentMotifFilter === 'pink') return sample.color === 'pink';
    if (currentMotifFilter === 'basic') return sample.form === 'basic';
    if (currentMotifFilter === 'heart') return sample.head === 'heart';
    if (currentMotifFilter === 'ring') return sample.ring === true;
    return true;
  });

  logoGalleryContainer.innerHTML = filteredSamples.map(sample => {
    const isSelected = sample.id === currentSelectedLogoId;

    return `
      <div class="bg-white rounded-3xl p-6 sm:p-7 border-2 ${isSelected ? 'border-[#b8935a] shadow-lg ring-2 ring-[#b8935a]/20' : 'border-[#E8DEC0]/60 shadow-sm'} transition-all flex flex-col justify-between group">
        <div>
          <!-- カードヘッダー -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-block text-[11px] font-bold tracking-wider px-3 py-1 rounded-full font-sans-jp bg-gradient-to-r from-[#b8935a] to-[#d8ba84] text-white shadow-xs">
              ${sample.badge}
            </span>
            <span class="text-[10px] font-sans-jp px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E8DEC0] text-[#7A7169]">${sample.referencePos}</span>
          </div>

          <h3 class="font-serif-jp text-base font-medium text-[#2C2724] mb-1">
            ${sample.name}
          </h3>
          <div class="flex items-center justify-between text-xs font-sans-jp text-[#8C6D3E] mb-4">
            <span class="font-medium">${sample.fontStyle}</span>
            <span class="text-[11px] text-[#8C827A]">${sample.colorName}</span>
          </div>

          <!-- ロゴ表示プレビュー領域（ライト / ダーク切り替え可能） -->
          <div class="rounded-2xl p-5 mb-4 transition-colors duration-300 flex items-center justify-center min-h-[115px] ${isDarkThemePreview ? 'bg-[#2C2724] border border-[#443D37]' : 'bg-[#FAF8F5] border border-[#E8E2D9]'}">
            ${sample.getSvg(isDarkThemePreview)}
          </div>

          <p class="font-sans-jp text-xs text-[#5F5750] leading-relaxed mb-5">
            ${sample.concept}
          </p>
        </div>

        <!-- アクションボタン -->
        <div class="pt-3 border-t border-[#F2ECE4]">
          <button class="apply-logo-btn w-full py-2.5 px-4 rounded-xl font-sans-jp text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${isSelected ? 'bg-[#b8935a] text-white shadow' : 'bg-[#FAF8F5] text-[#38332E] hover:bg-[#b8935a] hover:text-white border border-[#D5CBC0]'}" data-logo-id="${sample.id}">
            <i data-lucide="${isSelected ? 'check' : 'sparkles'}" class="w-3.5 h-3.5"></i>
            <span>${isSelected ? '現在ヘッダーに適用中' : 'このロゴをヘッダーに適用'}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // 適用ボタンのイベントリスナー
  document.querySelectorAll('.apply-logo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.logoId;
      currentSelectedLogoId = id;
      renderHeaderAndFooterLogos();
      renderLogoGallery();
      initIcons();

      // ヘッダーへスムーズスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  initIcons();
}

// フィルターボタンのクリックイベント
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    currentMotifFilter = filter;

    filterBtns.forEach(b => {
      b.classList.remove('bg-[#b8935a]', 'text-white', 'shadow-sm');
      b.classList.add('bg-white', 'text-[#38332E]');
    });

    btn.classList.remove('bg-white', 'text-[#38332E]');
    btn.classList.add('bg-[#b8935a]', 'text-white', 'shadow-sm');

    renderLogoGallery();
  });
});

// テーマ切り替えトグル（ロゴ比較用）
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    isDarkThemePreview = !isDarkThemePreview;
    themeToggleBtn.innerHTML = isDarkThemePreview 
      ? '<span>☀️ 明るい背景で比較する</span>' 
      : '<span>🌙 ダーク背景で比較する</span>';
    renderLogoGallery();
  });
}

// 初回レンダリング
renderHeaderAndFooterLogos();
renderLogoGallery();
