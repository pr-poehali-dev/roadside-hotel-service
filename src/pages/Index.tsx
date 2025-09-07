import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary/90 backdrop-blur text-primary-foreground py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="TreePine" size={32} className="text-accent" />
            <h1 className="text-2xl font-bold">Двеь Inn</h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm bg-accent/20 px-3 py-1 rounded-full">
              <Icon name="Clock" size={16} className="inline mr-1" />
              24/7
            </span>
            <span className="text-sm">
              <Icon name="Wifi" size={16} className="inline mr-1" />
              WiFi
            </span>
            <Button variant="secondary" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/img/58f61cad-9bf8-432a-a762-0acb32caca0a.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-primary-foreground">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Двеь Inn
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Придорожный комплекс в природном окружении
            </p>
            <p className="text-lg mb-8 opacity-80 animate-fade-in">
              Круглосуточное обслуживание • Уютная атмосфера • Полный комплекс услуг
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-scale-in">
              <Icon name="MapPin" size={20} className="mr-2" />
              Найти нас
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Всё необходимое для комфортного отдыха и проживания в одном месте
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Гостиница */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Icon name="Bed" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Гостиница</CardTitle>
                <CardDescription>Комфортные номера с современными удобствами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Wifi" size={16} />
                    <span>Бесплатный WiFi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Car" size={16} />
                    <span>Парковка включена</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Coffee" size={16} />
                    <span>Завтрак в номер</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary text-primary-foreground">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            {/* Кафе */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit">
                  <Icon name="UtensilsCrossed" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Кафе</CardTitle>
                <CardDescription>Домашняя кухня и свежие блюда 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>Работаем круглосуточно</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="ChefHat" size={16} />
                    <span>Домашние блюда</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Coffee" size={16} />
                    <span>Свежий кофе и выпечка</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-secondary text-secondary-foreground">
                  Меню
                </Button>
              </CardContent>
            </Card>

            {/* Сауна */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-accent/20 rounded-full w-fit">
                  <Icon name="Waves" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Сауна</CardTitle>
                <CardDescription>Расслабьтесь после долгой дороги</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Thermometer" size={16} />
                    <span>Финская сауна</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span>До 8 человек</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Droplets" size={16} />
                    <span>Душевые кабины</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary text-primary-foreground">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            {/* Парковка */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit">
                  <Icon name="Car" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Парковка</CardTitle>
                <CardDescription>Безопасная охраняемая стоянка</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={16} />
                    <span>24/7 охрана</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} />
                    <span>Места для фур</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={16} />
                    <span>Зарядка электромобилей</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-secondary text-secondary-foreground">
                  Узнать цены
                </Button>
              </CardContent>
            </Card>

            {/* Рыбалка */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-accent/20 rounded-full w-fit">
                  <Icon name="Fish" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Рыбалка</CardTitle>
                <CardDescription>Частный пруд в живописном месте</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="TreePine" size={16} />
                    <span>Природное окружение</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Fish" size={16} />
                    <span>Карп, окунь, щука</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Package" size={16} />
                    <span>Аренда снастей</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary text-primary-foreground">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* WiFi */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit">
                  <Icon name="Wifi" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">WiFi</CardTitle>
                <CardDescription>Быстрый интернет на всей территории</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={16} />
                    <span>Высокоскоростной</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={16} />
                    <span>Защищённое соединение</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span>Во всех зонах</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-secondary text-secondary-foreground">
                  Подключиться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О комплексе</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Двеь Inn — это уютный придорожный комплекс, расположенный в живописном природном окружении. 
                Мы предлагаем полный спектр услуг для путешественников, которые ценят комфорт и качественный сервис.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Работаем круглосуточно, без выходных</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Star" size={20} className="text-primary" />
                  <span>Высокий уровень сервиса и чистота</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="TreePine" size={20} className="text-primary" />
                  <span>Экологически чистое природное окружение</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span>Семейное дружелюбное обслуживание</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/a82d5c7e-c34f-4099-90ad-2dcd0de8e55e.jpg" 
                alt="Интерьер гостиницы"
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Всегда открыто</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты и местоположение</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (XXX) XXX-XX-XX</p>
                <p className="text-sm text-muted-foreground">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Яглевичи, Лесная 17</p>
                <p className="text-sm text-muted-foreground">Минская область</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Clock" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">24 часа</p>
                <p className="text-sm text-muted-foreground">7 дней в неделю</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground mr-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Navigation" size={20} className="mr-2" />
              Проложить маршрут
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="TreePine" size={28} className="text-accent" />
                <h3 className="text-2xl font-bold">Двеь Inn</h3>
              </div>
              <p className="text-primary-foreground/80">
                Придорожный комплекс в сердце природы. Комфорт, уют и качественный сервис 24/7.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>• Гостиница</li>
                <li>• Кафе и ресторан</li>
                <li>• Сауна и баня</li>
                <li>• Охраняемая парковка</li>
                <li>• Рыбалка</li>
                <li>• WiFi интернет</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Связь</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Яглевичи, Лесная 17</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Работаем 24/7</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Двеь Inn. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;