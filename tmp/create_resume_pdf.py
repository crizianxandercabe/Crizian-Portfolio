from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

OUT = "tmp/crizian-xander-acosta-resume-redesign.pdf"
W, H = letter
NAVY = colors.HexColor("#0A1422")
BLUE = colors.HexColor("#1685FF")
BLUE_LIGHT = colors.HexColor("#7FC0FF")
INK = colors.HexColor("#172230")
MUTED = colors.HexColor("#607084")
PALE = colors.HexColor("#EEF3F8")
RULE = colors.HexColor("#D5DFE9")
WHITE = colors.white

c = canvas.Canvas(OUT, pagesize=letter, pageCompression=1)
c.setTitle("Crizian Xander Acosta - Resume")
c.setAuthor("Crizian Xander Acosta")

# Restrained navy header with a blue edge and subtle portfolio grid.
c.setFillColor(NAVY)
c.rect(0, H-160, W, 160, stroke=0, fill=1)
c.setFillColor(BLUE)
c.rect(0, H-160, 7, 160, stroke=0, fill=1)
c.setStrokeColor(colors.HexColor("#18304A"))
c.setLineWidth(.45)
for x in range(450, 612, 24):
    c.line(x, H-154, x, H-8)
for y_grid in range(int(H-154), int(H-5), 24):
    c.line(450, y_grid, 610, y_grid)
c.setFillColor(BLUE_LIGHT)
c.setFont("Helvetica-Bold", 8)
c.drawString(38, H-31, "PROFESSIONAL RESUME   /   INFORMATION TECHNOLOGY")
c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 27)
c.drawString(38, H-72, "CRIZIAN XANDER ACOSTA")
c.setFillColor(colors.HexColor("#C6D2DF"))
c.setFont("Helvetica", 10)
c.drawString(39, H-94, "INFORMATION TECHNOLOGY GRADUATE   /   ASPIRING SOFTWARE DEVELOPER")
c.setFillColor(colors.HexColor("#B4C3D3"))
c.setFont("Helvetica", 9)
c.drawString(39, H-119, "crizianxandercabe@gmail.com")
c.setFillColor(BLUE)
c.setFont("Helvetica-Bold", 18)
c.drawRightString(W-30, H-37, "CXA.")
c.setFillColor(colors.HexColor("#8BA0B6"))
c.setFont("Helvetica-Bold", 7)
c.drawRightString(W-30, H-52, "PROFILE   /   2026")

left_x, left_w = 36, 158
right_x, right_w = 216, 360
body_top, bottom = H-178, 43
c.setFillColor(PALE)
c.roundRect(left_x, bottom, left_w, body_top-bottom, 8, stroke=0, fill=1)
c.setFillColor(BLUE)
c.roundRect(left_x, body_top-4, left_w, 4, 2, stroke=0, fill=1)

def para(text, x, top, width, size=8.4, leading=11.1, color=INK, bold=False):
    style = ParagraphStyle(
        "resume", fontName="Helvetica-Bold" if bold else "Helvetica",
        fontSize=size, leading=leading, textColor=color, alignment=TA_LEFT,
        spaceAfter=0, spaceBefore=0, allowWidows=0, allowOrphans=0,
    )
    p = Paragraph(text, style)
    _, height = p.wrap(width, 1000)
    p.drawOn(c, x, top-height)
    return top-height

def section_title(label, x, top, width, size=8.5):
    c.setFillColor(colors.HexColor("#17416A"))
    c.setFont("Helvetica-Bold", size)
    c.drawString(x, top-size, label.upper())
    y_line = top-size-5
    c.setStrokeColor(RULE)
    c.setLineWidth(.65)
    c.line(x, y_line, x+width, y_line)
    return y_line-10

# Left rail: education, technical skills, competencies, references.
lx, lw = left_x+14, left_w-28
y = body_top-18
y = section_title("Education", lx, y, lw)
y = para("<b>Bachelor of Science in Information Technology</b>", lx, y, lw, 8.5, 11, INK)-3
y = para("Northeastern College", lx, y, lw, 8.3, 10.5, MUTED)-2
y = para("Santiago City, Isabela | 2026", lx, y, lw, 7.7, 10, MUTED)-15
y = section_title("Technical Skills", lx, y, lw)
for skill in ["PHP  /  C#", "HTML  /  CSS", "Flutter  /  MySQL", "Git  /  GitHub", "Troubleshooting", "Debugging", "Software documentation"]:
    y = para(skill, lx, y, lw, 8.4, 12, INK)-2
y -= 10
y = section_title("Core Competencies", lx, y, lw)
for skill in ["Problem-solving", "Communication", "Team collaboration", "Time management", "Adaptability", "Attention to detail"]:
    y = para(skill, lx, y, lw, 8.2, 11.7, INK)-2
y -= 10
y = section_title("References", lx, y, lw)
para("Available upon request", lx, y, lw, 8.1, 11, MUTED)

# Main column: summary and project experience.
y = section_title("Professional Summary", right_x, body_top-18, right_w)
y = para(
    "BSIT graduate with academic experience building web and mobile applications and working with databases. "
    "Familiar with PHP, MySQL, HTML, CSS, C#, Flutter, and Git/GitHub. Motivated to solve problems and contribute to an IT team.",
    right_x, y, right_w, 8.6, 12, INK,
)-15
y = section_title("Academic Project Experience", right_x, y, right_w)

projects = [
    ("Carbonel Funeral Homes and Chapels Management System (CFHCMS)", "PROGRAMMER", "Contributed to a PHP/MySQL management system for client records, service packages, payments, and reports; helped refine features to meet project requirements."),
    ("Habit Quest Mobile Application", "PROGRAMMER", "Contributed to a Flutter app for habit management, goal tracking, and progress monitoring; participated in debugging and team development."),
    ("Hotel Reservation System", "CSS CONTRIBUTOR", "Helped style the reservation system interface and improve layout readability; collaborated on booking information and feature implementation."),
    ("Food Explorer", "PROGRAMMER", "Contributed to food discovery and user-facing application features; collaborated on interface design and development."),
]
for index, (title, role, description) in enumerate(projects, start=1):
    c.setFillColor(BLUE)
    c.roundRect(right_x, y-8, 5, 5, 1.2, stroke=0, fill=1)
    y = para(title, right_x+13, y, right_w-13, 8.5, 10.6, INK, bold=True)-3
    c.setFillColor(colors.HexColor("#36618A"))
    c.setFont("Helvetica-Bold", 6.6)
    c.drawString(right_x+13, y-6, role)
    y -= 12
    y = para(description, right_x+13, y, right_w-13, 7.8, 10, MUTED)-9
    if index < len(projects):
        c.setStrokeColor(RULE)
        c.setLineWidth(.45)
        c.line(right_x+13, y+4, right_x+right_w, y+4)

# Footer echoes the site frame without adding visual clutter.
c.setStrokeColor(RULE)
c.setLineWidth(.7)
c.line(right_x, 28, W-36, 28)
c.setFillColor(colors.HexColor("#718196"))
c.setFont("Helvetica-Bold", 6.5)
c.drawRightString(W-36, 17, "CRIZIAN XANDER ACOSTA   /   RESUME")
c.setFillColor(BLUE)
c.rect(36, 26, 18, 2, stroke=0, fill=1)
c.showPage()
c.save()
