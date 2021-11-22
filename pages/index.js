import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

const cardItems = [
  "Оборудование, офис",
  "Сырье и материалы",
  "Производства",
  "Брендинг, упаковка",
  "Продукт, рецептура",
  "Склад, логистика",
  "Дистрибьюция",
  "Продвижение",
  "Мерчендайзинг",
  "Таможня, логистика",
  "Управление продажами",
  "Другое",
];

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    setIsActive(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Wrapper}>
        <header className={styles.headerWrapper}>
          <Link href="/">
            <a className={styles.logWrapper}>
              <p className={styles.sWord}>S</p>
              <p className={styles.andSgin}>&</p>
              <p className={styles.pWord}>P</p>
            </a>
          </Link>
          <ul className={styles.navWrapper}>
            <li>
              <a
                style={{
                  color: isActive === 0 ? "#ff357a" : "",
                  borderBottom: isActive === 0 ? "2px solid #ff357a" : "",
                }}
                onClick={() => handleClick(0)}
                href="#section1"
              >
                ОПИСАНИЕ МОДЕЛИ БИЗНЕСА
              </a>
            </li>
            <li>
              <a
                style={{
                  color: isActive === 1 ? "#ff357a" : "",
                  borderBottom: isActive === 1 ? "2px solid #ff357a" : "",
                }}
                onClick={() => handleClick(1)}
                href="#section2"
              >
                КОНКУРЕНТНАЯ СРЕДА
              </a>
            </li>
            <li>
              <a
                style={{
                  color: isActive === 2 ? "#ff357a" : "",
                  borderBottom: isActive === 2 ? "2px solid #ff357a" : "",
                }}
                onClick={() => handleClick(2)}
                href="#section3"
              >
                КОНКУРЕНТНОЕ ПРЕИМУЩЕСТВО
              </a>
            </li>
            <li>
              <a
                style={{
                  color: isActive === 3 ? "#ff357a" : "",
                  borderBottom: isActive === 3 ? "2px solid #ff357a" : "",
                }}
                onClick={() => handleClick(3)}
                href="#section4"
              >
                ЦИКЛ РАБОТЫ
              </a>
            </li>
          </ul>
        </header>
        <div className={styles.mainWrapper}>
          <div className={styles.mainTextWrapper}>
            <h1>Группакомпаний S&P</h1>
            <h1>Сбытовое подразделение</h1>
          </div>
          <div className={styles.placeHolder}></div>
          <img src="/images/box.png" alt="hero" className={styles.heroImage} />
        </div>
        <div id="#section1" className={styles.section1}>
          <h2>ОПИСАНИЕ МОДЕЛИ БИЗНЕСА</h2>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3>
                Классическая модель <br />
                Производитель
              </h3>
              <ul className={styles.cardItem}>
                {cardItems.map((item) => {
                  return (
                    <>
                      <li>{item}</li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className={styles.card}>
              <h3>
                Классическая модель <br />
                Производитель и S&P group ✔
              </h3>
              <ul className={styles.cardItem}>
                {cardItems.map((item, index) => {
                  return (
                    <>
                      <li>
                        {index === 0 || index === 2 ? " " : "✔"} {item}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className={styles.card}>
              <h3>S&P group обеспечивает</h3>
              <ul className={styles.cardItem}>
                <li>
                  ✔ Аутсорсинг основных процессов (самостоятельно/субподряд)
                </li>
                <li>
                  ✔ Предоставление более высокого качества и оптимальной цены
                </li>
                <li>✔ Работы оплачиваются производителем</li>
                <li>
                  ✔ S&P имеет эксклюзив 3-10 лет и основной доход -% с оборота
                  (5-35)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="section2" className={styles.section2}>
          <h2>КОНКУРЕНТНАЯ СРЕДА</h2>
          <div className={styles.sectionWrapper}>
            <div className={styles.sectionContentWrapper}>
              <div className={styles.headlinWrapper}>
                <h3>Компании на рынке </h3>
                <h3>Сервис и услуги</h3>
              </div>
              <div className={styles.contentWrapper}>
                <ul className={styles.contentLinksItems}>
                  <li>
                    SALERS,{" "}
                    <a
                      href="https://salers.ru"
                      rel="noreferrer"
                      target="_blank"
                    >
                      salers.ru
                    </a>
                  </li>
                  <li>
                    In-Retail,{" "}
                    <a
                      href="https://in-retail.ru"
                      rel="noreferrer"
                      target="_blank"
                    >
                      in-retail.ru
                    </a>
                  </li>
                  <li>
                    ABX Consulting,{" "}
                    <a
                      href="https://abx-consulting.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      abx-consulting.com
                    </a>
                  </li>
                  <li>
                    McKinley,{" "}
                    <a
                      href="https://mckinleygroup.ru"
                      rel="noreferrer"
                      target="_blank"
                    >
                      mckinleygroup.ru
                    </a>
                  </li>
                  <li>
                    To-Retail,{" "}
                    <a
                      href="https://toretail.ru"
                      rel="noreferrer"
                      target="_blank"
                    >
                      toretail.ru
                    </a>
                  </li>
                  <li>
                    Food4Retail,{" "}
                    <a
                      href="https://food4retail.ru"
                      rel="noreferrer"
                      target="_blank"
                    >
                      food4retail.ru
                    </a>
                  </li>
                  <li style={{ border: "none" }}>И другие...</li>
                </ul>
                <ul className={styles.contentItems}>
                  <li>✔ Консалтинг</li>
                  <li>✔ Обучение</li>
                  <li>✔ Анализ рынка, потенциала</li>
                  <li>✔ Ввод в сети и сопровождение</li>
                  <li>✔ Маркетинг и продвижение</li>
                  <li>✔ Аутсорсинг процессов</li>
                  <li style={{ border: "none" }}>✔ И т.д., и т.п</li>
                </ul>
              </div>
            </div>
            <div className={styles.subContentWrapper}>
              <div className={styles.contentWrapper}>
                <ul className={styles.contentLinksItems}>
                  <li style={{ border: "none" }}>
                    SALERS,{" "}
                    <a
                      href="https://salers.ru"
                      rel="noreferrer"
                      target="_blank"
                    >
                      salers.ru
                    </a>
                  </li>
                </ul>
                <ul className={styles.contentItems}>
                  <li style={{ border: "none" }}>✔ Консалтинг</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3} id="#section3">
          <h2>КОНКУРЕНТНОЕ ПРЕИМУЩЕСТВО</h2>
          <ul className={styles.section3Content}>
            <li>✔ Мы не улучшаем и оптимизируем, мы делаем на лучшем</li>
            <li>✔ Эффект масштаба – качество и минимальные цены</li>
            <li>✔ Административный ресурс – прямой контакт с собственниками</li>
            <li>✔ Мотивация % от оборота – оплата за результат</li>
            <li> ✔Эксклюзив – фокус на исполнение, а не на конкуренцию</li>
          </ul>
        </div>
        <div className={styles.section4} id="section4">
          <h2>ЦИКЛ РАБОТЫ</h2>
          <ul className={styles.section4Content}>
            <li>
              Первичные переговоры с производителем (информация от
              производителя: произв. мощности, продукт, позиционирование и т.д.)
            </li>
            <li>
              Первичная стратегия развития производителя (потенциал, объем,
              действия)
            </li>
            <li>Договор сотрудничества с производителем</li>
            <li>Стратегия развития и продвижения</li>
            <li>Построение дистрибьюции и узнаваемости</li>
            <li>Управление продажами</li>
          </ul>
        </div>
        <footer className={styles.section7}>
          <div className={styles.textWrapper}>
            <h2>Группа Компаний S&P group</h2>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.png"
                  width="120"
                  height="120"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className={styles.addressWrapper}>
            <p>
              Группа Компаний S&P group, 125009, г. Москва, ул. Большая <br />
              Дмитровка,дом 23, строение 1 оф. 46. Тел. :+7 8001019753 <br />
              Генеральный Директор Сиротин Дмитрий+7 968 963 1611
            </p>
          </div>
        </footer>
        <div className="copyright">
          <p>©{year} S&P Group</p>
        </div>
      </div>
    </div>
  );
}
