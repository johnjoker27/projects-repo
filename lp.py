#import random  '''this is how you import libraries'''
import random 
def get_choices(): 
 player_choice = input("Enter a choice (rock, paper, scissors):")
 options = ["rock", "paper", "scissors"]
 computer_choice = random.choice(options)
 
 choices={"player": player_choice, "computer": computer_choice}
 return choices 


def check_win(player,computer):
 print(f"you chose {player} and computer chose{computer}")
 if player == computer:
  return "It's a tie!"
 return check_win() 
 
 
 
'''age = 24
print(f"you are {age} years old")'''


# if statements 
"""a = 3
b= 5
if a > b:
  print('yes')"""
 

choices = get_choices()
print(choices)
'''#dictionaries
dict = {"name": "beau", "color": "blue"}'''
'''libraries
import are usually at the top of the program'''
'''list are used to store multiple items in a single variable
food = ["pizza","carrots","burger"]
dinner = random.choice(food)
'''  '''to create an argument for a function put them in the paranthesis'''
'''use + to concatenate strings '''
#f strings allow you to make strings with variable and python codes

 
