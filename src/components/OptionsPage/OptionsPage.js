import React, { Fragment } from 'react';
import css from './OptionsPage.module.css';
import Header2 from '../Header2/Header2';

const OptionsPage = () => (
  <Fragment>
    <Header2 />
    <section className={css.allOptionsSection}>
      <a className={css.anchor} id="all-options/toptop"></a>
      <h1 className={css.allOptionsSectionTitle}>Список всех услуг</h1>
      <div className={css.btns}>
        <a className={css.btn} href="#all-options/diagnos">
          Диагностика автомобиля
        </a>
        <a className={css.btn} href="#all-options/to">
          Техническое обслуживание
        </a>
        <a className={css.btn} href="#all-options/hod">
          Ходовая часть
        </a>
        <a className={css.btn} href="#all-options/trans">
          Трансмиссия
        </a>
        <a className={css.btn} href="#all-options/rul">
          Рулевое управление
        </a>
        <a className={css.btn} href="#all-options/dvig">
          Двигатель
        </a>
        <a className={css.btn} href="#all-options/grm">
          ГРМ{window.screen.width > 768 && ' (газораспределительный механизм)'}
        </a>
        <a className={css.btn} href="#all-options/tormoz">
          Тормозная система
        </a>

        <a className={css.btn} href="#all-options/elec">
          Электрооборудование
        </a>
        <a className={css.btn} href="#all-options/con">
          Кондиционирование и обогрев
        </a>
      </div>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/diagnos"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>Диагностика автомобиля</span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Диагностика ходовой части (на подъемнике)
        </li>
        <li className={css.allOptionsSectionP}>
          Диагностика ходовой части на диагностической линии (компьютерная)
        </li>
        <li className={css.allOptionsSectionP}>
          Диагностика электрооборудования автомобиля
        </li>
        <li className={css.allOptionsSectionP}>
          Диагностика электросистем автомобиля с помощью осциллографа
        </li>
        <li className={css.allOptionsSectionP}>
          Компьютерная диагностика электронных систем (считывание ошибок из
          блока управления автомобиля)
        </li>
        <li className={css.allOptionsSectionP}>
          Компьютерная диагностика электронных систем углубленная (считывание
          ошибок, определения причины их возникновения и меры по устранению)
        </li>
        <li className={css.allOptionsSectionP}>
          Осмотр освещения и световой сигнализации
        </li>
        <li className={css.allOptionsSectionP}>
          Проверка уровня технических жидкостей, расположенных в моторном отсеке
          (тормозная жидкость, жидкость системы сцепления, масла гидроусилителя
          руля, охлаждающая жидкость, масла двигателя, масла АКПП, если есть щуп
          уровня)
        </li>
        <li className={css.allOptionsSectionP}>
          Проверка качества технических жидкостей, расположенных в моторном
          отсеке (тормозная жидкость, жидкость системы сцепления, охлаждающая
          жидкость, жидкость омывателя)
        </li>
        <li className={css.allOptionsSectionP}>
          Диагностика системы трансмиссии (сцепление, КПП-коробка переключения
          скоростей, раздаточная коробка, главная передача, дифференциал,
          карданная передача, ШРУС-шарниры равных угловых скоростей)
        </li>
        <li className={css.allOptionsSectionP}>
          Проверка уровня технических жидкостей трансмиссии (масла механической
          коробки переключения скоростей, смазки раздаточной коробки, смазки
          дифференциала переднего и заднего мостов)
        </li>
        <li className={css.allOptionsSectionP}>
          Диагностика рулевого управления
        </li>
        <li className={css.allOptionsSectionP}>
          Проверка ремней навесного оборудования
        </li>
        <li className={css.allOptionsSectionP}>Диагностика развал-схождения</li>
        <li className={css.allOptionsSectionP}>
          Диагностика системы обдува и отопления салона автомобиля
        </li>
        <li className={css.allOptionsSectionP}>
          Диагностика системы охлаждения
        </li>
        <li className={css.allOptionsSectionP}>
          Диагностика ситемы кондиционирования
        </li>
        <li className={css.allOptionsSectionP}>Диагностика топливной ситемы</li>
        <li className={css.allOptionsSectionP}>
          Проверка дымогенератором герметичности системы впуска, рециркуляции,
          фар и др.
        </li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/to"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>
        Техническое обслуживание
      </span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Замена масла и масляного фильтра двигателя
        </li>
        <li className={css.allOptionsSectionP}>Промывка двигателя</li>
        <li className={css.allOptionsSectionP}>Замена воздушного фильтра</li>
        <li className={css.allOptionsSectionP}>Замена фильтра топливного</li>
        <li className={css.allOptionsSectionP}>
          Замена фильтра топливного расположенного в топливном баке
        </li>
        <li className={css.allOptionsSectionP}>
          Замена фильтра топливного дизельного
        </li>
        <li className={css.allOptionsSectionP}>Замена фильтра салона</li>
        <li className={css.allOptionsSectionP}>
          Замена фильтра салона расположенного под педальным узлом
        </li>
        <li className={css.allOptionsSectionP}>
          Регулировки света фар (основного света: ближний и дальний)
        </li>
        <li className={css.allOptionsSectionP}>
          Регулировки света фар дополнительного обланання (например,
          противотуманных фар)
        </li>
        <li className={css.allOptionsSectionP}>
          Частичная замена масла АКПП (автоматическая коробка переключения
          передач) без замены масляного фильтра
        </li>
        <li className={css.allOptionsSectionP}>
          Частичная замена масла АКПП с заменой масляного фильтра
        </li>
        <li className={css.allOptionsSectionP}>
          Полная замена масла АКПП с промывкой без замены масляного фильтра
        </li>
        <li className={css.allOptionsSectionP}>
          Полная замена масла АКПП с промывкой и заменой масляного фильтра
        </li>
        <li className={css.allOptionsSectionP}>
          Замена масла в механической КПП
        </li>
        <li className={css.allOptionsSectionP}>
          Замена жидкости гидроусилителя руля (одноконтурная система)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена жидкости гидроусилителя руля (двухконтурная система)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена масла дифференциала моста
        </li>
        <li className={css.allOptionsSectionP}>
          Замена масла в раздаточной коробке
        </li>
        <li className={css.allOptionsSectionP}>
          Замена жидкости системы охлаждения
        </li>
        <li className={css.allOptionsSectionP}>Замена тормозной жидкости</li>
        <li className={css.allOptionsSectionP}>
          Замена жидкости системы сцепления
        </li>
        <li className={css.allOptionsSectionP}>
          Замена ремней навесного оборудования
        </li>
        <li className={css.allOptionsSectionP}>
          Замена свечей зажигания в рядном двигателе
        </li>
        <li className={css.allOptionsSectionP}>
          Замена свечей зажигания в V-образном двигателе
        </li>
        <li className={css.allOptionsSectionP}>
          Замена свечей зажигания в оппозитном двигателе
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка впускного коллектора
        </li>
        <li className={css.allOptionsSectionP}>Замена свечи накала</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка топливной планки
        </li>
        <li className={css.allOptionsSectionP}>
          Промывки топливных форсунок (инжекторов) двигателя 4 шт (промывочная
          жидкость оплачивается дополнительно)
        </li>
        <li className={css.allOptionsSectionP}>
          Заправка системы кондиционирования хладагентом (хладагент оплачивается
          дополнительно)
        </li>
        <li className={css.allOptionsSectionP}>
          Шприцевание крестовин карданного вала
        </li>
        <li className={css.allOptionsSectionP}>Шприцевание подвески</li>
        <li className={css.allOptionsSectionP}>Шприцевание шкворня</li>
        <li className={css.allOptionsSectionP}>
          Регулировка стояночного тормоза
        </li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/hod"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>Ходовая часть</span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Снятие и установка верхнего рычага передней подвески
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка нижнего рычага передней подвески
        </li>
        <li className={css.allOptionsSectionP}>
          Замена шаровой опоры (крепления заклепками)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена шаровой опоры (болтовое крепление)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена шаровой опоры (запрессованной)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена сайлентблока рычага (на снятом рычаг)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена сайлентблока подрамника (на снятом подрамнике)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка стойки амортизатора (амортизатор в пружине)
        </li>
        <li className={css.allOptionsSectionP}>
          Разборка и сборка стойки амортизатора
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка амортизатора без пружины (вставка)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка пружины (когда пружина отдельно от амортизатора)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка стойки пневмоамортизатора
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рессоры поперечной передней подвески
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка балки задней подвески
        </li>
        <li className={css.allOptionsSectionP}>Замена сайлентблока балки</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка поперечного рычага задней подвески
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка продольного рычага задней подвески
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рессоры задней подвески
        </li>
        <li className={css.allOptionsSectionP}>Замена сайлентблока рессоры</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка подшипника ступицы
        </li>
        <li className={css.allOptionsSectionP}>
          Регулировка подшипника ступицы
        </li>
        <li className={css.allOptionsSectionP}>Снятие и установка ступицы</li>
        <li className={css.allOptionsSectionP}>Слесарные работы</li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/trans"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>Трансмиссия</span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рабочего цилиндра сцепления
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка главного цилиндра сцепления
        </li>
        <li className={css.allOptionsSectionP}>
          Прокачка гидропривода сцепления
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка троса сцепления
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта сцепления (без снятия подрамника)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта сцепления (со снятием подрамника)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта сцепления (полный привод)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена двойного сцепления (DSG, Power Shift)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка кулисы КПП, АКПП
        </li>
        <li className={css.allOptionsSectionP}>Ремонт кулисы КПП</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка КПП, АКПП (без снятия подрамника)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка КПП, АКПП (со снятием подрамника)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка КПП, АКПП (полный привод)
        </li>
        <li className={css.allOptionsSectionP}>
          Разборка и сборка механической коробки переключения скоростей (МКПШ)
        </li>
        <li className={css.allOptionsSectionP}>
          Разборка и сборка автоматической коробки переключения скоростей (АКПП)
        </li>
        <li className={css.allOptionsSectionP}>Ремонт гидроблока</li>
        <li className={css.allOptionsSectionP}>Ремонт гидротрансформатора</li>
        <li className={css.allOptionsSectionP}>
          Разборка и сборка роботизированной аба полуавтоматической КПП
          (например DSG, Power Shift)
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт актуатора роботизированной аба полуавтоматической КПП
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка раздаточной коробки
        </li>
        <li className={css.allOptionsSectionP}>
          Разборка и сборка раздаточной коробки
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка карданного вала
        </li>
        <li className={css.allOptionsSectionP}>
          Замена крестовины карданного вала
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка эластичной муфты карданного вала
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка подвесного подшипника карданного вала
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка полуоси переднего моста
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка полуоси заднего (разрезного) моста
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка полуоси заднего (неразрезного) моста
        </li>
        <li className={css.allOptionsSectionP}>
          Замена сальника полуоси (при снятой полуоси)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена сальника хвостовика редуктора
        </li>
        <li className={css.allOptionsSectionP}>
          Замена сальника полуоси заднего (неразрезного) моста (при снятой
          полуоси)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена пидшика подвесного (опорного) полуоси
        </li>
        <li className={css.allOptionsSectionP}>Снятие и установка ШРУС</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка пыльника ШРУС
        </li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/rul"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>Рулевое управление</span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рулевой колонки
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка карданчика рулевого вала
        </li>
        <li className={css.allOptionsSectionP}>
          Замена крестовины карданчика рулевого вала
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка наконечника рулевой тяги
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рулевой тяги
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка пыльника рулевой тяги
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рулевой трапеции
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рулевой рейки
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт рулевой рейки с электроусилителем
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт рулевой рейки с гидроусилителем
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт рулевой рейки без гидроусилителя
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт распределителя рулевой рейки
        </li>
        <li className={css.allOptionsSectionP}>
          Замена сайлентблока рулевой рейки (на снятий рулевой рейке)
        </li>
        <li className={css.allOptionsSectionP}>Замена нососа гидроусилителя</li>
        <li className={css.allOptionsSectionP}>Замена бачка гидроусилителя</li>
        <li className={css.allOptionsSectionP}>
          Промывание бачка гидроусилителя (при снятом бачке)
        </li>
        <li className={css.allOptionsSectionP}>
          Промывка системы гидроусилителя руля (одноконтурная система)
        </li>
        <li className={css.allOptionsSectionP}>
          Промывка системы гидроусилителя руля (двухконтурная система)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка шланга высокого давления рулевого управления
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка шланга низкого давления рулевого управления
        </li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/tormoz"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>Тормозная система</span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Замена дисковых тормозных колодок
        </li>
        <li className={css.allOptionsSectionP}>
          Замена барабанных тормозных колодок
        </li>
        <li className={css.allOptionsSectionP}>
          Замена стояночных тормозных колодок
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка тормозных дисков
        </li>
        <li className={css.allOptionsSectionP}>Чистка ступиц</li>
        <li className={css.allOptionsSectionP}>Проточка тормозных дисков</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка тормозных барабанов
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка суппорта тормозного
        </li>
        <li className={css.allOptionsSectionP}>
          Замена направляющих суппорта тормозного
        </li>
        <li className={css.allOptionsSectionP}>
          Замена ремкомплекта направляющих суппорта тормозного
        </li>
        <li className={css.allOptionsSectionP}>
          Замена поршня суппорта тормозного
        </li>
        <li className={css.allOptionsSectionP}>
          Замена ремкомплекта поршня суппорта тормозного
        </li>
        <li className={css.allOptionsSectionP}>
          Замена ремкомплекта суппорта с электрическим механизмом ручника
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка рабочего тормозного цилиндра
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка главного тормозного цилиндра
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка тормозного шланга
        </li>
        <li className={css.allOptionsSectionP}>
          Изготовление тормозной трубки
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка троса стояночного тормоза
        </li>
        <li className={css.allOptionsSectionP}>
          Замена ремкомплекта стояночного тормоза
        </li>
        <li className={css.allOptionsSectionP}>Проверка тормозной жидкости</li>
        <li className={css.allOptionsSectionP}>Прокачка тормозной системы</li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/dvig"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>Двигатель</span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Замена прокладки клапанной крышки
        </li>
        <li className={css.allOptionsSectionP}>
          Замена прокладки впускного коллектора
        </li>
        <li className={css.allOptionsSectionP}>
          Замена прокладки выпускного коллектора
        </li>
        <li className={css.allOptionsSectionP}>
          Замена прокладки головки блока
        </li>
        <li className={css.allOptionsSectionP}>Замена прокладки поддона</li>
        <li className={css.allOptionsSectionP}>
          Замена переднего сальника двигателя
        </li>
        <li className={css.allOptionsSectionP}>
          Замена заднего сальника двигателя
        </li>
        <li className={css.allOptionsSectionP}>Снятие и установка ГБЦ</li>
        <li className={css.allOptionsSectionP}>
          Разборка и сборка ГБЦ (ГБЦ снята)
        </li>
        <li className={css.allOptionsSectionP}>
          Проверка на герметичность ГБЦ
        </li>
        <li className={css.allOptionsSectionP}>
          Замена направляющей клапана ГБЦ
        </li>
        <li className={css.allOptionsSectionP}>Замена седла клапана</li>
        <li className={css.allOptionsSectionP}>Прирезка седла клапана</li>
        <li className={css.allOptionsSectionP}>Фрезерование фасок клапана</li>
        <li className={css.allOptionsSectionP}>
          Притирка седла и фасок клапана
        </li>
        <li className={css.allOptionsSectionP}>
          Регулировка клапанов, 16-клапанная ГБЦ (ГБЦ снята)
        </li>
        <li className={css.allOptionsSectionP}>Шлифовка плоскости ГБЦ</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка двигателя легкового автомобиля
        </li>
        <li className={css.allOptionsSectionP}>
          Разборка и сборка блока цилиндров
        </li>
        <li className={css.allOptionsSectionP}>Шлифовка коленвала</li>
        <li className={css.allOptionsSectionP}>Расточка блока цилиндров</li>
        <li className={css.allOptionsSectionP}>Гильзовка блока цилиндров</li>
        <li className={css.allOptionsSectionP}>
          Изготовление гильз блока цилиндров
        </li>
        <li className={css.allOptionsSectionP}>
          Замена поршневых колец (на снятом поршне)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена пальца поршня (на снятом поршне)
        </li>
        <li className={css.allOptionsSectionP}>
          Шлифовка плоскости блока цилиндров
        </li>
        <li className={css.allOptionsSectionP}>Снятие и установка турбины</li>
        <li className={css.allOptionsSectionP}>Ремонт турбины</li>
        <li className={css.allOptionsSectionP}>
          Сверления свечи накала с помощью специнструмента
        </li>
        <li className={css.allOptionsSectionP}>
          Замена ремня навесного оборудования
        </li>
        <li className={css.allOptionsSectionP}>
          Замена ролика навесного оборудования
        </li>
        <li className={css.allOptionsSectionP}>
          Замена водяного насоса (без снятия ГРМ)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка радиатора охлаждения
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка термостата
        </li>
        <li className={css.allOptionsSectionP}>Промывка системы охлаждения</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка топливной форсунки (бензин)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка топливной форсунки FSI, TFSI
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка топливного бензинового насоса (подвесного)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка топливного бензинового насоса (расположенного в
          топливном баке)
        </li>
        <li className={css.allOptionsSectionP}>
          Замер давления топливного бензинового насоса
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт топливного бензинового насоса
        </li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/grm"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>
        ГРМ (газораспределительный механизм)
      </span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Замена комплекта ремня ГРМ рядного двигателя (8 клапанов)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта ремня ГРМ рядного двигателя (16 клапанов)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта ремня ГРМ V-образного двигателя
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта ремня ГРМ оппозитного двигателя
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта цепи ГРМ рядного двигателя (без снятия двигателя)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта цепи ГРМ V-образного двигателя (без снятия двигателя)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена комплекта цепи ГРМ (на снятом двигателе)
        </li>
        <li className={css.allOptionsSectionP}>
          Замена цепи привода распредвала
        </li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/elec"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>Электрооборудование</span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Снятие и установка генератора
        </li>
        <li className={css.allOptionsSectionP}>Разборка и сборка генератора</li>
        <li className={css.allOptionsSectionP}>Снятие и установка стартера</li>
        <li className={css.allOptionsSectionP}>Разборка и сборка стартера</li>
        <li className={css.allOptionsSectionP}>
          Замена свечей зажигания в рядном двигателе
        </li>
        <li className={css.allOptionsSectionP}>
          Замена свечей зажигания в V-образном двигателе
        </li>
        <li className={css.allOptionsSectionP}>
          Замена свечей зажигания в оппозитный двигатель
        </li>
        <li className={css.allOptionsSectionP}>
          Замена проводов высокого напряжения в рядном двигателе
        </li>
        <li className={css.allOptionsSectionP}>
          Замена проводов высокого напряжения в V-образном двигателе
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка впускного коллектора
        </li>
        <li className={css.allOptionsSectionP}>Замена свечи накала</li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка катушки зажигания
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка аккумуляторной батареи
        </li>
        <li className={css.allOptionsSectionP}>Зарядка АКБ</li>
        <li className={css.allOptionsSectionP}>
          Замена лампы освещения внешнего
        </li>
        <li className={css.allOptionsSectionP}>
          Замена лампы освещения внутреннего
        </li>
        <li className={css.allOptionsSectionP}>Установка угла зажигания</li>
      </ul>
      <div className={css.anchorWrap}>
        <a className={css.anchor} id="all-options/con"></a>
      </div>
      <span className={css.allOptionsSectionSpan}>
        Кондиционирование и обогрев
      </span>
      <ul className={css.allOptionsSectionList}>
        <li className={css.allOptionsSectionP}>
          Проверка системы кондиционирования на герметичность
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка компрессора кондиционера
        </li>
        <li className={css.allOptionsSectionP}>
          Замена муфты компрессора кондиционера
        </li>
        <li className={css.allOptionsSectionP}>
          Замена шкива компрессора кондиционера
        </li>
        <li className={css.allOptionsSectionP}>
          Замена подшипника шкива компрессора кондиционера
        </li>
        <li className={css.allOptionsSectionP}>
          Замена сальника вала компрессора
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка радиатора кондиционера (конденсер)
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка влагомаслоотделитель
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка клапана ТРВ
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка испарителя кондиционера
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт трубок, шлангов системы кондиционирования автомобиля
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка радиатора отопителя салона
        </li>
        <li className={css.allOptionsSectionP}>
          Снятие и установка вентилятора отопителя салона
        </li>
        <li className={css.allOptionsSectionP}>
          Ремонт вентилятора отопителя салона
        </li>
        <li className={css.allOptionsSectionP}>Снятие и установка торпеды</li>
      </ul>
      <a className={css.topAnchor} href="#all-options/toptop">
        &#8593;
      </a>
    </section>
  </Fragment>
);

export default OptionsPage;
