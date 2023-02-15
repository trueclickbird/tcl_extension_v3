def on_button_pressed_a():
    basic.show_number(Trueclicklife.right_sensor())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_number(Trueclicklife.left_sensor())
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_touched():
    basic.show_icon(IconNames.HEART)
    Trueclicklife.forward(800)
    basic.pause(500)
    Trueclicklife.back(500)
    basic.pause(500)
    Trueclicklife.turn_left(400)
    basic.pause(500)
    Trueclicklife.turn_right(300)
    basic.pause(500)
    Trueclicklife.stop()
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)
