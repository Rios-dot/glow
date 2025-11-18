"use client";

import { useState } from "react";
import { Camera, Sparkles, Users, BookOpen, Trophy, Scissors, Palette, Glasses, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function GlowApp() {
  const [selectedGender, setSelectedGender] = useState<"masculino" | "feminino" | "unissex">("unissex");

  const features = [
    {
      icon: Camera,
      title: "Análise Facial",
      description: "Análise detalhada do formato do rosto e características únicas",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Scissors,
      title: "Estilos de Cabelo",
      description: "Milhares de cortes e estilos para todos os gêneros",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "Maquiagem & Grooming",
      description: "Dicas personalizadas de beleza e cuidados pessoais",
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      icon: Glasses,
      title: "Acessórios",
      description: "Sugestões de óculos, chapéus e joias que combinam com você",
      color: "from-emerald-400 to-teal-600"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Compartilhe looks e interaja com outros usuários",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Trophy,
      title: "Desafios",
      description: "Participe de desafios de estilo e ganhe recompensas",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  const celebrityStyles = [
    {
      name: "Brad Pitt",
      style: "Clássico Moderno",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      gender: "masculino"
    },
    {
      name: "Zendaya",
      style: "Elegante Versátil",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      gender: "feminino"
    },
    {
      name: "Timothée Chalamet",
      style: "Contemporâneo Ousado",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      gender: "masculino"
    },
    {
      name: "Emma Watson",
      style: "Sofisticado Minimalista",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      gender: "feminino"
    }
  ];

  const tutorials = [
    {
      title: "Cuidados com a Pele Masculina",
      duration: "8 min",
      category: "Grooming",
      level: "Iniciante"
    },
    {
      title: "Técnicas de Contorno Facial",
      duration: "12 min",
      category: "Maquiagem",
      level: "Intermediário"
    },
    {
      title: "Cortes Modernos Unissex",
      duration: "15 min",
      category: "Cabelo",
      level: "Avançado"
    },
    {
      title: "Barbas: Estilos e Manutenção",
      duration: "10 min",
      category: "Grooming",
      level: "Iniciante"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Glow
                </h1>
                <p className="text-xs text-gray-400">Seu estilo, sua identidade</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <Camera className="w-4 h-4 mr-2" />
              Começar Análise
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 shadow-lg shadow-blue-500/30">
            ✨ Tecnologia de Análise Facial Avançada
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Descubra Seu Estilo Perfeito
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Análise facial personalizada, estilos de cabelo, maquiagem e grooming para todos os gêneros.
            Transforme sua aparência com inteligência artificial.
          </p>
          
          {/* Gender Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={selectedGender === "masculino" ? "default" : "outline"}
              onClick={() => setSelectedGender("masculino")}
              className={selectedGender === "masculino" ? "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
            >
              Masculino
            </Button>
            <Button
              variant={selectedGender === "feminino" ? "default" : "outline"}
              onClick={() => setSelectedGender("feminino")}
              className={selectedGender === "feminino" ? "bg-gradient-to-r from-fuchsia-500 to-pink-600 shadow-lg shadow-pink-500/30" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
            >
              Feminino
            </Button>
            <Button
              variant={selectedGender === "unissex" ? "default" : "outline"}
              onClick={() => setSelectedGender("unissex")}
              className={selectedGender === "unissex" ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
            >
              Todos os Estilos
            </Button>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-lg px-8 py-6 shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            <Camera className="w-5 h-5 mr-2" />
            Iniciar Análise Facial
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-white">Funcionalidades Exclusivas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50">
              <CardHeader>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                <CardDescription className="text-base text-gray-400">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Celebrity Styles */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-white">Estilos de Celebridades</h3>
          <p className="text-gray-400">Inspire-se nos looks das suas celebridades favoritas</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {celebrityStyles
            .filter(celeb => selectedGender === "unissex" || celeb.gender === selectedGender)
            .map((celeb, index) => (
              <Card key={index} className="border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-pointer bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/50">
                <CardContent className="p-4">
                  <Avatar className="w-full h-32 rounded-2xl mb-3 ring-2 ring-cyan-500/30">
                    <AvatarImage src={celeb.image} alt={celeb.name} className="object-cover" />
                    <AvatarFallback>{celeb.name[0]}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-center mb-1 text-white">{celeb.name}</h4>
                  <p className="text-sm text-gray-400 text-center">{celeb.style}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="tutorials" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-slate-900/50 border border-white/10">
            <TabsTrigger value="tutorials" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600">
              <BookOpen className="w-4 h-4 mr-2" />
              Tutoriais
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600">
              <Users className="w-4 h-4 mr-2" />
              Comunidade
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600">
              <Trophy className="w-4 h-4 mr-2" />
              Desafios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tutorials" className="space-y-4">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">Aprenda com Especialistas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className="border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 text-white">{tutorial.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">{tutorial.category}</Badge>
                          <Badge variant="outline" className="border-gray-700 text-gray-400">{tutorial.level}</Badge>
                          <Badge variant="outline" className="border-gray-700 text-gray-400">{tutorial.duration}</Badge>
                        </div>
                      </div>
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            <div className="text-center max-w-2xl mx-auto">
              <Users className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-4 text-white">Comunidade Glow</h3>
              <p className="text-gray-400 mb-6">
                Conecte-se com milhares de usuários, compartilhe seus looks, receba feedback e inspire-se com transformações incríveis.
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-blue-500/30">
                <MessageCircle className="w-4 h-4 mr-2" />
                Entrar na Comunidade
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <div className="text-center max-w-2xl mx-auto">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-amber-400" />
              <h3 className="text-2xl font-bold mb-4 text-white">Desafios de Estilo</h3>
              <p className="text-gray-400 mb-6">
                Participe de desafios semanais, experimente novos looks e ganhe badges exclusivos. Mostre sua criatividade e suba no ranking!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <CardTitle className="text-white">Desafio Semanal</CardTitle>
                    <CardDescription className="text-gray-400">Look Profissional</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2 border-fuchsia-500/50 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="text-3xl mb-2">✨</div>
                    <CardTitle className="text-white">Desafio Mensal</CardTitle>
                    <CardDescription className="text-gray-400">Transformação Total</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <CardTitle className="text-white">Desafio Criativo</CardTitle>
                    <CardDescription className="text-gray-400">Estilo Ousado</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white">
          <CardHeader className="text-center py-12">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Descobrir Seu Melhor Estilo?
            </CardTitle>
            <CardDescription className="text-white/90 text-lg mb-6">
              Junte-se a milhares de usuários que já transformaram sua aparência com nossa tecnologia de análise facial.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl transition-all duration-300 hover:scale-105">
                <Camera className="w-5 h-5 mr-2" />
                Começar Agora Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
                Ver Planos Premium
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-xl py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">© 2024 Glow - Todos os direitos reservados</p>
          <p className="text-sm">Transformando aparências com tecnologia e inclusividade</p>
        </div>
      </footer>
    </div>
  );
}
