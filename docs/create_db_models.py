import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py



from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

# Define the base class for declarative model definitions
Base = declarative_base()

# Example table models
class School(Base):
    """description: Stores information about schools."""
    __tablename__ = 'schools'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(Text, nullable=True)

class Student(Base):
    """description: Stores information about students."""
    __tablename__ = 'students'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    dob = Column(DateTime, nullable=True)
    school_id = Column(Integer, ForeignKey('schools.id'), nullable=True)

class Teacher(Base):
    """description: Stores information about teachers."""
    __tablename__ = 'teachers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    hire_date = Column(DateTime, nullable=True)
    school_id = Column(Integer, ForeignKey('schools.id'), nullable=True)

class Course(Base):
    """description: Stores information about courses."""
    __tablename__ = 'courses'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    school_id = Column(Integer, ForeignKey('schools.id'), nullable=True)

class Enrollment(Base):
    """description: Stores information about student enrollments in courses."""
    __tablename__ = 'enrollments'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    course_id = Column(Integer, ForeignKey('courses.id'), nullable=False)
    student_id = Column(Integer, ForeignKey('students.id'), nullable=False)
    enrollment_date = Column(DateTime, default=datetime.utcnow)

class Grade(Base):
    """description: Stores grades assigned to students."""
    __tablename__ = 'grades'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    enrollment_id = Column(Integer, ForeignKey('enrollments.id'), nullable=False)
    grade = Column(String, nullable=True)

# Continue defining other tables with similar structure

# Create SQLite database and initialize the schema
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Establish session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
school = School(name='Springfield High School', address='742 Evergreen Terrace, Springfield')
session.add(school)
session.commit()

student = Student(first_name='Bart', last_name='Simpson', dob=datetime(2004, 4, 1), school_id=school.id)
session.add(student)
session.commit()

teacher = Teacher(first_name='Edna', last_name='Krabappel', hire_date=datetime(2010, 9, 1), school_id=school.id)
session.add(teacher)
session.commit()

course = Course(name='Mathematics', description='Introduction to Algebra', school_id=school.id)
session.add(course)
session.commit()

enrollment = Enrollment(course_id=course.id, student_id=student.id, enrollment_date=datetime(2023, 1, 23))
session.add(enrollment)
session.commit()

grade = Grade(enrollment_id=enrollment.id, grade='A')
session.add(grade)
session.commit()

# Add similar entries for more tables and rows here
# Ensure to introduce diversity in your sample data

# Remember to close the session when done
session.close()
