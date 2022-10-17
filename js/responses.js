function getBotResponse(input) 
{
    // Simple responses
    if(input == "What is the number to dial" || input == "what to dial?" || input == "what is the ussd")
    {
        return "Dial *120*321#"
    }
    else if(input == "steps to register" || input == "steps" || input == "step")
    {
        return "Enter your ID number.\n Enter your phone number.\n Your amount will appear.\n Enter 'pay someone'.\n Enter phone number.\n Send.\n"
    }
    else if (input == "I can't register") {
        return "What response do you get when you click register?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "I do not understand. Try asking something else!";
    }
}