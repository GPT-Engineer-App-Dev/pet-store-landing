import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Pet Store</h1>
        <p className="text-lg text-gray-600 mt-2">Your one-stop shop for all your pet needs</p>
      </header>

      <main className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
            <CardDescription>We offer a wide range of services for your pets</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Grooming</li>
              <li>Veterinary Services</li>
              <li>Pet Training</li>
              <li>Pet Boarding</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>We would love to hear from you</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
            </form>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Send Message</Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="w-full max-w-4xl mx-auto text-center py-8">
        <div className="flex items-center justify-center space-x-4">
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/150" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Pet Store</h2>
            <p className="text-gray-600">Your pet's favorite place</p>
          </div>
        </div>
        <div className="mt-4">
          <Badge variant="outline">Follow Us</Badge>
        </div>
      </footer>
    </div>
  );
};

export default Index;