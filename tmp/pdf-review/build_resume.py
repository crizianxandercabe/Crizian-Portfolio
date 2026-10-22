from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.lib.colors import HexColor
from pathlib import Path

out = Path('tmp/pdf-review/one-page.pdf')
W,H=A4
page_h=700
y_shift=page_h-H
c=canvas.Canvas(str(out), pagesize=(W,page_h))
c.translate(0,y_shift)
c.setTitle('Crizian Xander Acosta - Resume')
c.setAuthor('Crizian Xander Acosta')
navy=HexColor('#123B63'); blue=HexColor('#2878B8'); ink=HexColor('#17212B'); muted=HexColor('#566575'); pale=HexColor('#EEF3F8'); line=HexColor('#D8E1EA'); white=colors.white
margin=34; sidebar=166; gap=22; left=margin; right=left+sidebar+gap; mainw=W-right-margin
# Header band
c.setFillColor(navy); c.rect(0,H-115,W,115,fill=1,stroke=0)
c.setFillColor(blue); c.rect(0,H-115,8,115,fill=1,stroke=0)
c.setFillColor(white); c.setFont('Helvetica-Bold',22); c.drawString(margin,H-52,'CRIZIAN XANDER ACOSTA')
c.setFont('Helvetica',10); c.setFillColor(HexColor('#D9E6F2')); c.drawString(margin,H-73,'INFORMATION TECHNOLOGY GRADUATE  |  ASPIRING SOFTWARE DEVELOPER')
c.setFont('Helvetica',9); c.drawString(margin,H-94,'crizianxandercabe@gmail.com')
# sidebar panel
panel_y=250; panel_h=H-386
c.setFillColor(pale); c.roundRect(margin,panel_y,sidebar,panel_h,7,fill=1,stroke=0)
y=H-143

def label(txt,x,y,color=navy,size=9):
    c.setFillColor(color); c.setFont('Helvetica-Bold',size); c.drawString(x,y,txt.upper())

def wrap(txt,font,size,maxw):
    words=txt.split(); rows=[]; row=''
    for word in words:
        test=(row+' '+word).strip()
        if stringWidth(test,font,size)<=maxw: row=test
        else:
            if row: rows.append(row)
            row=word
    if row: rows.append(row)
    return rows

def para(txt,x,y,maxw,font='Helvetica',size=8.25,leading=10.5,color=ink):
    c.setFillColor(color); c.setFont(font,size)
    for row in wrap(txt,font,size,maxw):
        c.drawString(x,y,row); y-=leading
    return y

def section(txt,x,y,maxw):
    label(txt,x,y); y-=7
    c.setStrokeColor(line); c.setLineWidth(.7); c.line(x,y,x+maxw,y); return y-11

# Sidebar
x=left+14; sw=sidebar-28
y=section('Education',x,y,sw)
y=para('Bachelor of Science in Information Technology',x,y,sw,'Helvetica-Bold',9.1,11.5); y-=2
y=para('Northeastern College',x,y,sw,'Helvetica',8.8,11,muted)
y=para('Santiago City, Isabela  |  2026',x,y-1,sw,'Helvetica',8.5,10.5,muted)-14
y=section('Technical Skills',x,y,sw)
for text in ['PHP  ·  C#','HTML  ·  CSS','Flutter  ·  MySQL','Git  ·  GitHub','Troubleshooting','Debugging','Software documentation']:
    y=para(text,x,y,sw,'Helvetica',9.2,16,ink)
y-=22
y=section('Core Competencies',x,y,sw)
for text in ['Problem-solving','Communication','Team collaboration','Time management','Adaptability','Attention to detail']:
    y=para(text,x,y,sw,'Helvetica',9.2,16,ink)
y-=22
y=section('References',x,y,sw)
para('Available upon request',x,y,sw,'Helvetica',9.2,13,muted)

# Main column
x=right; mw=mainw
y=H-143
y=section('Professional Summary',x,y,mw)
y=para('BSIT graduate with academic experience building web and mobile applications and working with databases. Familiar with PHP, MySQL, HTML, CSS, C#, Flutter, and Git/GitHub. Motivated to solve problems and contribute to an IT team.',x,y,mw,'Helvetica',9.1,12.5,ink)-15
y=section('Academic Project Experience',x,y,mw)
projects=[
('Carbonel Funeral Homes and Chapels Management System (CFHCMS)','PROGRAMMER','Contributed to a PHP/MySQL management system for client records, service packages, payments, and reports; helped refine features to meet project requirements.'),
('Habit Quest Mobile Application','PROGRAMMER','Contributed to a Flutter app for habit management, goal tracking, and progress monitoring; participated in debugging and team development.'),
('Hotel Reservation System','CSS CONTRIBUTOR','Helped style the reservation system interface and improve layout readability; collaborated on booking information and feature implementation.'),
('Food Explorer','PROGRAMMER','Contributed to food discovery and user-facing application features; collaborated on interface design and development.'),
]
for title,role,desc in projects:
    c.setFillColor(blue); c.circle(x+2,y+1,2,fill=1,stroke=0)
    c.setFillColor(ink); c.setFont('Helvetica-Bold',9.8); c.drawString(x+11,y,title)
    y-=14
    c.setFillColor(muted); c.setFont('Helvetica-Bold',7.1); c.drawString(x+11,y,role)
    y-=11
    y=para(desc,x+11,y,mw-11,'Helvetica',9.5,14,ink)-65

# Footer follows the content to avoid an oversized empty lower area.
footer_y=172
c.setStrokeColor(line); c.line(x,footer_y+10,x+mw,footer_y+10)
c.setFillColor(muted); c.setFont('Helvetica',7); c.drawRightString(x+mw,footer_y,'CRIZIAN XANDER ACOSTA  •  RESUME')
c.save()
print(out.resolve())
